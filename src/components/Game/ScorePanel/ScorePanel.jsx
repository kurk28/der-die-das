import styles from './ScorePanel.module.css';

export const ScorePanel = (props) => {
  return (
    <div class={styles.scorePanel}>
      <span class={styles.score}>Correct: {props.correctScore}</span>
      <span class={styles.score}>Fail: {props.fallScore}</span>
    </div>
  );
};
