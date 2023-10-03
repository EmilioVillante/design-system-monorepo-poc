import styles from './example.module.scss';

export type ExampleProps = {
  name?: string;
};

export function Example(props: ExampleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Example!</h1>
      <p>Name: {props.name}</p>
    </div>
  );
}

export default Example;
