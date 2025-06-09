import styles from './Game.module.css';
import { GenderSelectorButton } from './GenderSelectorButton/GenderSelectorButton';
import { ScorePanel } from './ScorePanel/ScorePanel';
import { Tile } from './Tile/Tile';

export const Game = () => {
  return (
    <>
      <div>
        <div class={styles.scoreContainer}>
          <ScorePanel correctScore={10} fallScore={2} />
        </div>
      </div>
      <div class={styles.tileContainer}>
        <Tile word="Sthuhl" />
      </div>
      <div class={styles.buttonsPanel}>
        <GenderSelectorButton
          onButtonClick={() => console.log('der')}
          name={'der'}
        />
        <GenderSelectorButton
          onButtonClick={() => console.log('die')}
          name={'die'}
        />
        <GenderSelectorButton
          onButtonClick={() => console.log('das')}
          name={'das'}
        />
      </div>
    </>
  );
};
