import styles from './Chain.module.css';

/**
 * Chain component.
 *
 * @param {Object} props
 * @param {string} props.chain
 * @param {function} props.onIconClick
 * */
export const Chain = (props) => {
  return (
    <div class={styles.chain} data-testid="chain-wrapper">
      <span data-testid="chain">{props.chain}</span>
      <img
        class={styles['close-icon']}
        src="/icons/close.svg"
        alt="Delete preview"
        onClick={(e) => props.onIconClick(e)}
        data-testid="close-icon"
      />
    </div>
  );
};
