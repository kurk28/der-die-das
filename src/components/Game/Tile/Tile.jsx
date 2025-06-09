import styles from './Tile.module.css';

export const Tile = (props) => {
  return <div class={styles.tile}>{props.word}</div>;
};
