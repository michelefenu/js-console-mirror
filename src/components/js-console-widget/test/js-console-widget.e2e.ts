import { newE2EPage } from '@stencil/core/testing';

describe('js-console-widget', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<js-console-widget></js-console-widget>');

    const element = await page.find('js-console-widget');
    expect(element).toHaveClass('hydrated');
  });
});
