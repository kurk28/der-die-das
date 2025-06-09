import styles from './WordsInput.module.css';

export const WordsInput = () => {
  return (
    <div class={styles.container}>
      <label for="wordsInput" name="wordsInput" class={styles.label}>
        Enter words separated by comma:
      </label>
      <textarea
        id="wordsInput"
        rows="3"
        autofocus
        wrap="soft"
        placeholder="der Stuhl, der Tisch, die Lampe"
        class={styles.wordsInput}
      ></textarea>
    </div>
  );
};
