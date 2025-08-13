import styles from './ScorePanel.module.css';

export const ScorePanel = (props) => {
  return (
    <div class={styles.scorePanel}>
      <span class={styles.score} data-testid="correct-score">
        Correct: {props.correctScore}
      </span>
      <span class={styles.score} data-testid="fail-score">
        Fail: {props.fallScore}
      </span>
    </div>
  );
};
