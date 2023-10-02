import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names,
  addDependenciesToPackageJson
} from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {

  // Get normalised names from the provided name option
  const { className, fileName } = names(options.name);
  // Location of where the project will be created
  const projectRoot = `libs/components/${options.atomicType}s/${options.name}`;
  // Prefix the name with the atomic type to prevent similar namespaces
  const projectName = `${options.name}`
  // Construct options that will be available through ejs templating
  const computedOptions = {
    ...options,
    directory: `components/${options.atomicType}s`,
    className,
    fileName,
    projectName
  }

  // Add dependencies to the package.json
  addDependenciesToPackageJson(tree, {}, {}, )

  // Add and configure the nx project.json
  addProjectConfiguration(tree, options.name, {
    name: projectName,
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {
      lint: {
        executor: "@nx/linter:eslint",
        outputs: ["{options.outputFile}"],
        options: {
          lintFilePatterns: [
            `${projectRoot}/src/**/*.{ts,tsx,js,jsx}`
          ]
        }
      },
      build: {
        executor: "@nx/js:tsc",
        options: {
          outputPath: `${projectRoot}/dist`,
          main: `${projectRoot}/src/index.ts`,
          tsConfig: `${projectRoot}/tsconfig.lib.json`,
          assets: [`${projectRoot}/*.md`],
          generateExportsField: true, // Required to rewrite the package.json exports fields from /src/index.ts to /src/index.js
          clean: true // Removes the output directory before building
        },
        configurations: {
          development: {
            mode: "development"
          },
          production: {
            mode: "production"
          }
        }
      },
      test: {
        executor: "nx:run-commands",
        options: {
          command: `npx vitest ${projectRoot}/src/**/*.spec.tsx --globals --run --environment=jsdom`
        }
      }
    }
  });

  // Finally, generate all files
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, computedOptions);
  await formatFiles(tree);
}

export default myGeneratorGenerator;
