import styles from './component-has-dependencies.module.scss';
import { ExampleReactLibrary } from '@my-nx-workspace/example-react-library';

/* eslint-disable-next-line */
export interface ComponentHasDependenciesProps {}

export function ComponentHasDependencies(props: ComponentHasDependenciesProps) {
  return (
    <div className={styles['container']}>
      <ExampleReactLibrary />
      <h1>Welcome to ComponentHasDependencies!</h1>
    </div>
  );
}

export default ComponentHasDependencies;
