import styles from './example-molecule.module.scss';
import { ExampleAtom } from 'evill-example-atom';

export type ExampleMoleculeProps = {
  name?: string;
};

export function ExampleMolecule(props: ExampleMoleculeProps) {
  return (
    <>
      <div className={styles['container']}>
        <h1>Welcome to ExampleMolecule! cool</h1>
        <p>Name: {props.name}</p>
      </div>
      <hr />
      <p>Example monorepo atom as a dependency! test status command</p>
      <ExampleAtom />
    </>
  );
}

export default ExampleMolecule;
