import styles from './example-react-library.module.scss';

/* eslint-disable-next-line */
export interface ExampleReactLibraryProps {}

export function ExampleReactLibrary(props: ExampleReactLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExampleReactLibrary!</h1>
    </div>
  );
}

export default ExampleReactLibrary;
