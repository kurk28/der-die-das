import styles from './App.module.css';
import { createSignal, Match, Switch } from 'solid-js';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';
import { Button } from './components/shared/Button/Button';
import { InputWords } from './components/InputWords/InputWords';

export const App = () => {
  const [page, setPage] = createSignal(0);
  const [chains, setChains] = createSignal([]);
  const [shownWord, setShownWord] = createSignal('');

  let repeat = [];
  let index = 0;

  const onSaveChain = (str) => {
    const words = str.trim().split(',');
    setChains(words);
    setShownWord(words[0].trim());
    setPage(2);
  };
  const setNextWordIndex = () => {
    if (index < chains().length - 1) {
      index += 1;
      setShownWord(chains()[index].trim());
    } else {
      index = 0;
      setShownWord(chains()[index].trim());
    }
  };
  const saveWord = (word) => {
    repeat.push(word);
  };
  const correct = () => setNextWordIndex();
  const fall = (word) => {
    saveWord(word);
    setNextWordIndex();
  };

  return (
    <>
      <div class={styles.main}>
        <div class={styles.headerContainer}>
          <Header />
        </div>
        <Switch fallback={<p>Not Found</p>}>
          <Match when={page() === 0}>
            <div class={styles.chooseGameContainer}>
              <Button color="blue" onClick={() => setPage(1)}>
                Start new Game
              </Button>
              <Button color="green" onClick={() => setPage(3)}>
                Select Game
              </Button>
            </div>
          </Match>
          <Match when={page() === 1}>
            <div class={styles.gameContainer}>
              <InputWords onSaveChains={onSaveChain} />
            </div>
          </Match>
          <Match when={page() === 2}>
            <div>
              <Game word={shownWord()} correct={correct} fall={fall} />
            </div>
          </Match>
        </Switch>
      </div>
    </>
  );
};
