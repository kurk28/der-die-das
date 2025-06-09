import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Game } from './components/Game/Game';

export const App = () => {
  return (
    <div class={styles.main}>
      <Header />
      <Game />
    </div>
  );
};
