import styles from './InputChain.module.css';
import { Chain } from './Chain/Chain';
import { Button } from '../shared/Button/Button';

export const InputChain = (props) => {
  const onChainDelete = (e) => console.log(e);

  return (
    <div>
      <input class={styles.input} id="chain-input"></input>
      <Button
        class={styles.button}
        onClick={(e) => console.log(e)}
        color="blue"
      >
        Add chain
      </Button>
      <div class={styles['chain-preview']}>
        <Chain chain={'test'} onIconClick={onChainDelete} />
      </div>
    </div>
  );
};
