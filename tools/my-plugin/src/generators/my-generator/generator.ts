import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  const projectRoot = `packages/components/atoms/${options.name}`;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });

  const computedOptions = {
    ...options
  }

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, computedOptions);

  await formatFiles(tree);
}

export default myGeneratorGenerator;
