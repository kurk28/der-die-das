import styles from './Game.module.css';
import { createSignal, createMemo } from 'solid-js';
import { GenderSelectorButton } from './GenderSelectorButton/GenderSelectorButton';
import { ScorePanel } from './ScorePanel/ScorePanel';
import { Tile } from './Tile/Tile';

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
      <div>
        <div class={styles.scoreContainer}>
          <ScorePanel correctScore={correctScore()} fallScore={fallScore()} />
        </div>
      </div>
      <div class={styles.tileContainer}>
        <Tile word={chain()[1]} />
      </div>
      <div class={styles.buttonsPanel}>
        <GenderSelectorButton
          onButtonClick={() => onArticleClick('der')}
          name={'der'}
        />
        <GenderSelectorButton
          onButtonClick={() => onArticleClick('die')}
          name={'die'}
        />
        <GenderSelectorButton
          onButtonClick={() => onArticleClick('das')}
          name={'das'}
        />
      </div>
    </div>
  );
};
