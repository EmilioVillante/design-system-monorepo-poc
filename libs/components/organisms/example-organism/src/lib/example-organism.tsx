import styles from './example-organism.module.scss';
import { ExampleMolecule } from 'evill-example-molecule';

export type ExampleOrganismProps = {
  name?: string;
};

export function ExampleOrganism(props: ExampleOrganismProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExampleOrganism!</h1>
      <p>Name: {props.name}</p>
      <br />
      <hr />
      <p>Example monorepo molecule as a dependency! test</p>
      <ExampleMolecule />
    </div>
  );
}

export default ExampleOrganism;
