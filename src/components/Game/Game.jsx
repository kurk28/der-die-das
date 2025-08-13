import styles from './Game.module.css';
import { createSignal } from 'solid-js';
import { ScorePanel } from './ScorePanel/ScorePanel';
import { Tile } from './Tile/Tile';
import { Button } from '../shared/Button/Button';
import { Dialog } from './Dialog/Dialog';

export const Game = (props) => {
  //TODO: do I need to reset reactive variable in signal?
  const [words, setWords] = createSignal(props.words);
  const [chain, setChain] = createSignal(words()[0].split(' '));
  const [correctScore, setCorrectScore] = createSignal(0);
  const [failScore, setFailScore] = createSignal(0);
  const [isModalShown, setIsModalShown] = createSignal(false);

  let repeat = [];
  let index = 0;
  let isGameFinished = false;

  const setNextWord = () => {
    if (index < words().length - 1) {
      index += 1;
      setChain(words()[index].trim().split(' '));
    } else {
      isGameFinished = true;
      setIsModalShown(true);
    }
  };

  const onArticleClick = (article) => {
    if (isGameFinished) return;

    if (article === chain()[0]) {
      setCorrectScore((prevScore) => ++prevScore);
      setNextWord();
    } else {
      repeat.push(words()[index]);
      setFailScore((prevScore) => ++prevScore);
      setNextWord();
    }
  };

  const resetResult = () => {
    setCorrectScore(0);
    setFailScore(0);
  };

  const repeatWithFallWords = () => {
    resetResult();
    index = 0;
    setWords(repeat);
    setChain(words()[index].trim().split(' '));
  };

  return (
    <div class={styles.game}>
      <Dialog
        isShown={isModalShown()}
        correct={correctScore()}
        fall={failScore()}
        onCancel={() => setIsModalShown(false)}
        onRetry={repeatWithFallWords}
      />
      <div>
        <div class={styles.scoreContainer}>
          <ScorePanel correctScore={correctScore()} fallScore={failScore()} />
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
        >
          Das
        </Button>
      </div>
    </div>
  );
};
