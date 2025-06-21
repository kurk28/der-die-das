import styles from './Button.module.css';
import { children } from 'solid-js';

/**
 * Button component.
 *
 * @param {Object} props - component props
 * @param {'blue' | 'green' | 'red' | 'yellow'} [props.color] - button color variant
 * @param {Function} props.onClick - click event handler
 * @param {any} [props.children] - button content
 */
export const Button = (props) => {
  const c = children(() => props.children);
  return (
    <button
      class={styles.button}
      onclick={props.onClick}
      classList={{
        [styles['button--blue']]: props.color === 'blue',
        [styles['button--green']]: props.color === 'green',
        [styles['button--red']]: props.color === 'red',
        [styles['button--yellow']]: props.color === 'yellow',
      }}
      data-testid="button"
    >
      {c()}
    </button>
  );
};
