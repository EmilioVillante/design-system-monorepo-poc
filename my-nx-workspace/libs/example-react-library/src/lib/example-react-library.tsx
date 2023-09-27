import styles from './example-react-library.module.scss';

/* eslint-disable-next-line */
export interface ExampleReactLibraryProps {
  name?: string;
  description?: string[]
}

export function ExampleReactLibrary({ name = 'Example Component', description = [] }: ExampleReactLibraryProps) {
  console.log(description)
  return (
    <div className={styles['container']}>
      <h1>Welcome to {name}</h1>
      {description.map(desc => <p>{desc}</p>)}
    </div>
  );
}

export default ExampleReactLibrary;
