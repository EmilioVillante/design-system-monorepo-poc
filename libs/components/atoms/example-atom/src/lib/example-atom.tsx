import styles from './example-atom.module.scss';

export type ExampleAtomProps = {
  name?: string;
};

export function ExampleAtom(props: ExampleAtomProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExampleAtom with change!   really cool</h1>
      <p>Name: {props.name}</p>
    </div>
  );
}

export default ExampleAtom;
