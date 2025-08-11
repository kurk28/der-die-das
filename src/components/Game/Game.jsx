import styles from './Game.module.css';
import { createSignal, createMemo } from 'solid-js';
import { ScorePanel } from './ScorePanel/ScorePanel';
import { Tile } from './Tile/Tile';
import { Dialog } from '../Dialog/Dialog';
import { Button } from '../shared/Button/Button';

export const Game = (props) => {
  const [correctScore, setCorrectScore] = createSignal(0);
  const [fallScore, setFallScore] = createSignal(0);
  const chain = createMemo(() => props.word.split(' '));

  const onArticleClick = (article) => {
    if (article === chain()[0]) {
      setCorrectScore((prevScore) => ++prevScore);
      props.correct(props.word);
    } else {
      setFallScore((prevScore) => ++prevScore);
      props.fall(props.word);
    }
  };

  return (
    <div class={styles.game}>
      <Dialog correct={correctScore} fall={fallScore} />
      <div>
        <div class={styles.scoreContainer}>
          <ScorePanel correctScore={correctScore()} fallScore={fallScore()} />
        </div>
      </div>
      <div class={styles.tileContainer}>
        <Tile word={chain()[1]} />
      </div>
      <div class={styles.buttonsPanel}>
        <Button
          class={styles.genderBtn}
          color="blue"
          onClick={() => onArticleClick('der')}
        >
          Der
        </Button>
        <Button
          class={styles.genderBtn}
          color="red"
          onClick={() => onArticleClick('die')}
        >
          Die
        </Button>
        <Button
          class={styles.genderBtn}
          color="green"
          onClick={() => onArticleClick('das')}
          name={'das'}
        >
          Das
        </Button>
      </div>
    </div>
  );
};
