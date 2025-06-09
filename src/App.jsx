import styles from './App.module.css';
import { createSignal, Match, Switch } from 'solid-js';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';
import { WordsInput } from './components/WordsInput/WordsInput';

export const App = () => {
  const [page, setPage] = createSignal(0);

  return (
    <>
      <div class={styles.main}>
        <div class={styles.headerContainer}>
          <Header />
        </div>
        <Switch fallback={<p>Not Found</p>}>
          <Match when={page() === 0}>
            <div class={styles.wordsInputContainer}>
              <WordsInput />
            </div>
          </Match>
          <Match when={page() === 1}>
            <div class={styles.gameContainer}>
              <Game />
            </div>
          </Match>
        </Switch>
      </div>
    </>
  );
};
