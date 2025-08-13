import { test, expect } from '@playwright/test';

test.describe('Start Game: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show "Start game" and "Load game"', async ({ page }) => {
    const playBtn = await page.getByRole('button', {
      name: 'Start new Game',
    });
    await expect(playBtn).toBeAttached();
    const loadGameBtn = await page.getByRole('button', {
      name: 'Select Game',
    });
    await expect(loadGameBtn).toBeAttached();
  });
});

test.describe('Select article: ', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('button', {
        name: 'Start new Game',
      })
      .click();
    await page
      .getByTestId('words-input')
      .fill('der Stuhl, die Lampe, das Buch');
    await page.getByRole('button', { name: 'Add chain' }).click();
  });
  test('should display correct result', async ({ page }) => {
    const correctAttemp = await page.getByTestId('correct-score');
    await page.getByRole('button', { name: 'Der' }).click();
    await expect(correctAttemp).toHaveText('Correct: 1');
    await page.getByRole('button', { name: 'Die' }).click();
    await expect(correctAttemp).toHaveText('Correct: 2');
    page.getByRole('button', { name: 'Das' }).click();
    await expect(correctAttemp).toHaveText('Correct: 3');
  });
  test('should display fall result', async ({ page }) => {
    const correctAttemp = await page.getByTestId('fail-score');
    page.getByRole('button', { name: 'Das' }).click();
    await expect(correctAttemp).toHaveText('Fail: 1');
    await page.getByRole('button', { name: 'Der' }).click();
    await expect(correctAttemp).toHaveText('Fail: 2');
    await page.getByRole('button', { name: 'Die' }).click();
    await expect(correctAttemp).toHaveText('Fail: 3');
  });
});
