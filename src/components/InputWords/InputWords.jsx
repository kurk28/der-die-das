import styles from './InputWords.module.css';
import StoreContext from '@src/store/store';
import { createStore } from 'solid-js/store';
import { For, Show, useContext, createEffect } from 'solid-js';
import { Button } from '../shared/Button/Button';

export const InputWords = (props) => {
  let textArea;

  const onSaveChainBtnClick = () => {
    const trimmedWord = textArea.value.trim();
    if (!trimmedWord) return;
    props.onSaveChains(textArea.value);
  };

  return (
    <div>
      <div class={styles['word-input-container']}>
        <label for="words-input" name="words-input" class={styles.label}>
          Enter words separated by comma:
        </label>
        <textarea
          ref={textArea}
          id="words-input"
          rows="3"
          autofocus
          wrap="soft"
          placeholder="der Stuhl, der Tisch, die Lampe"
          class={styles.input}
        >
          der Der, die Die, das Das
        </textarea>
      </div>

      <Button class={styles.button} onClick={onSaveChainBtnClick} color="blue">
        Add chain
      </Button>
    </div>
  );
};
