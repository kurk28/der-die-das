import styles from './Header.module.css';

export const Header = () => (
  <h1 class={styles.header}>
    <span class={styles.der}>Der</span>
    <span class={styles.die}>Die</span>
    <span class={styles.das}>Das</span>
  </h1>
);
