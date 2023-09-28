import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names,
  updateJson,
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
  const projectName = `${options.atomicType}-${options.name}`
  // Construct options that will be available through ejs templating
  const computedOptions = {
    ...options,
    directory: `components/${options.atomicType}s`,
    className,
    fileName,
    projectName
  }

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
            "libs/component-has-dependencies/**/*.{ts,tsx,js,jsx}"
          ]
        }
      },
      build: {
        executor: "@nx/vite:build",
        outputs: ["{options.outputPath}"],
        defaultConfiguration: "production",
        options: {
          outputPath: "{projectRoot}/dist"
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
        executor: "@nx/vite:test",
        outputs: ["{options.reportsDirectory}"],
        options: {
          passWithNoTests: true,
          reportsDirectory: "{projectRoot}"
        }
      }
    }
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, computedOptions);
  await formatFiles(tree);
}

export default myGeneratorGenerator;
