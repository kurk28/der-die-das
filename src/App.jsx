import styles from './App.module.css';
import { GenderSelectorButton } from './components/GenderSelectorButton/GenderSelectorButton';
import { Header } from './components/Header/Header';
import { ScorePanel } from './components/ScorePanel/ScorePanel';
import { Tile } from './components/Tile/Tile';

export const App = () => {
  return (
    <div class={styles.main}>
      <div>
        <Header />
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
    </div>
  );
};
