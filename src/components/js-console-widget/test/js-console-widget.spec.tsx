import { newSpecPage } from '@stencil/core/testing';
import { JsConsolemirror } from '../js-console-mirror';

describe('js-console-mirror', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JsConsolemirror],
      html: `<js-console-mirror></js-console-mirror>`,
    });
    expect(page.root).toEqualHtml(`
      <js-console-mirror>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </js-console-mirror>
    `);
  });
});
