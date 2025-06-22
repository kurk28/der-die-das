import styles from './Button.module.css';
import { describe, test, expect, vi } from 'vitest';
import { render } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

const testId = 'button';
const onClickMock = vi.fn();
const user = userEvent.setup();

describe('Button:', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should be in the DOM', () => {
    const { getByTestId } = render(() => <Button onClick={onClickMock} />);
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  test('should call onClick prop', async () => {
    const { getByTestId } = render(() => <Button onClick={onClickMock} />);
    const button = getByTestId(testId);
    await user.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should have .button--blue class', () => {
    const { getByTestId } = render(() => (
      <Button onClick={onClickMock} color="blue" />
    ));
    const button = getByTestId(testId);
    expect(button).toHaveClass(styles['button--blue']);
  });

  test('should have .button--green class', () => {
    const { getByTestId } = render(() => (
      <Button onClick={onClickMock} color="green" />
    ));
    const button = getByTestId(testId);
    expect(button).toHaveClass(styles['button--green']);
  });

  test('should have .button--yellow class', () => {
    const { getByTestId } = render(() => (
      <Button onClick={onClickMock} color="yellow" />
    ));
    const button = getByTestId(testId);
    expect(button).toHaveClass(styles['button--yellow']);
  });

  test('should have .button--red class', () => {
    const { getByTestId } = render(() => (
      <Button onClick={onClickMock} color="red" />
    ));
    const button = getByTestId(testId);
    expect(button).toHaveClass(styles['button--red']);
  });
});
