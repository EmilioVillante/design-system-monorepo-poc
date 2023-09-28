import styles from './<%= fileName %>.module.scss';

export type <%= className %>Props = {
  name?: string;
}

export function <%= className %>(props: <%= className %>Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to <%= className %>!</h1>
      <p>Name: {props.name}</p>
    </div>
  );
}

export default <%= className %>;
