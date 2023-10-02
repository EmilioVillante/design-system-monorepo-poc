import styles from './example-independent-component.module.scss';

export type ExampleIndependentComponentProps = {
  name?: string;
};

export function ExampleIndependentComponent(
  props: ExampleIndependentComponentProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExampleIndependentComponent!</h1>
      <p>Name: {props.name}</p>
    </div>
  );
}

export default ExampleIndependentComponent;
