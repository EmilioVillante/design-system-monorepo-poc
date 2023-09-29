import styles from './example-molecule.module.scss';
import { ExampleAtom } from '@my-nx-workspace/example-atom';

export type ExampleMoleculeProps = {
  name?: string;
};

export function ExampleMolecule(props: ExampleMoleculeProps) {
  return (
    <>
      <div className={styles['container']}>
        <h1>Welcome to ExampleMolecule!</h1>
        <p>Name: {props.name}</p>
      </div>
      <hr />
      <p>Example monorepo atom as a dependency</p>
      <ExampleAtom />
    </>
  );
}

export default ExampleMolecule;
