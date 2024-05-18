import { newE2EPage } from '@stencil/core/testing';

describe('js-console-mirror', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<js-console-mirror></js-console-mirror>');

    const element = await page.find('js-console-mirror');
    expect(element).toHaveClass('hydrated');
  });
});
