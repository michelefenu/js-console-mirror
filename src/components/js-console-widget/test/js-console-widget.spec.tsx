import { newSpecPage } from '@stencil/core/testing';
import { JsConsoleWidget } from '../js-console-widget';

describe('js-console-widget', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JsConsoleWidget],
      html: `<js-console-widget></js-console-widget>`,
    });
    expect(page.root).toEqualHtml(`
      <js-console-widget>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </js-console-widget>
    `);
  });
});
