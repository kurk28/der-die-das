import styles from './GenderSelectorButton.module.css';

export const GenderSelectorButton = (props) => {
  return (
    <button class={styles.genderBtn} onClick={() => props.onButtonClick()}>
      {props.name}
    </button>
  );
};
