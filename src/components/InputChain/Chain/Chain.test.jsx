import { describe, test, expect, vi } from 'vitest';
import { render } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';
import { Chain } from './Chain';

const chainWrapperTestId = 'chain-wrapper';
const chainTestId = 'chain';
const closeIconTestId = 'close-icon';
const chain = 'die Kette';
const onIconClick = vi.fn();
const user = userEvent.setup();

describe('Chain', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should be in the DOM', () => {
    const { getByTestId } = render(() => (
      <Chain chain={chain} onIconClick={onIconClick} />
    ));
    expect(getByTestId(chainWrapperTestId)).toBeInTheDocument();
  });

  test('should call onIconClick callback', async () => {
    const { getByTestId } = render(() => (
      <Chain chain={chain} onIconClick={onIconClick} />
    ));
    const closeIcon = getByTestId(closeIconTestId);
    await user.click(closeIcon);
    expect(onIconClick).toHaveBeenCalledTimes(1);
  });

  test('should show chain property', () => {
    const { getByTestId } = render(() => (
      <Chain chain={chain} onIconClick={onIconClick} />
    ));
    const chainValue = getByTestId(chainTestId).innerHTML;
    expect(chainValue).toBe(chain);
  });
});
