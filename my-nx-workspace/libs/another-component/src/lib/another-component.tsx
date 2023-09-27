import styles from './another-component.module.scss';

/* eslint-disable-next-line */
export interface AnotherComponentProps {}

export function AnotherComponent(props: AnotherComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AnotherComponent!</h1>
      <span>test</span>
    </div>
  );
}

export default AnotherComponent;
