import styles from './WordsInput.module.css';
import { For, Show } from 'solid-js';
import { createStore } from 'solid-js/store';

export const WordsInput = () => {
  let input;
  const [words, setWords] = createStore([]);

  const onWordsAddBtnClick = () => {
    const trimmedWord = input.value.trim();
    if (!trimmedWord) return;
    const wordWrapper = {
      isDeleted: false,
      word: trimmedWord,
    };
    setWords(words.length, wordWrapper);
    input.value = '';
  };

  const onWordPreviewClick = (index) => {
    setWords(index, 'isDeleted', (isDeleted) => !isDeleted);
  };

  return (
    <div class={styles.wordInputContainer}>
      <label for="wordsInput" name="wordsInput" class={styles.label}>
        Enter words separated by comma:
      </label>
      <textarea
        ref={input}
        id="wordsInput"
        rows="3"
        autofocus
        wrap="soft"
        placeholder="der Stuhl, der Tisch, die Lampe"
        class={styles.wordsInput}
      ></textarea>
      <button onClick={onWordsAddBtnClick}>Add word</button>

      <div class={styles.wordPreviewContainer}>
        <For each={words}>
          {(ww, index) => {
            return (
              <Show when={!ww.isDeleted}>
                <span
                  class={styles.wordPreview}
                  onClick={() => onWordPreviewClick(index())}
                >
                  {ww.word}
                </span>
              </Show>
            );
          }}
        </For>
      </div>
    </div>
  );
};
