/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JsConsoleWidget {
    }
}
declare global {
    interface HTMLJsConsoleWidgetElement extends Components.JsConsoleWidget, HTMLStencilElement {
    }
    var HTMLJsConsoleWidgetElement: {
        prototype: HTMLJsConsoleWidgetElement;
        new (): HTMLJsConsoleWidgetElement;
    };
    interface HTMLElementTagNameMap {
        "js-console-widget": HTMLJsConsoleWidgetElement;
    }
}
declare namespace LocalJSX {
    interface JsConsoleWidget {
    }
    interface IntrinsicElements {
        "js-console-widget": JsConsoleWidget;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "js-console-widget": LocalJSX.JsConsoleWidget & JSXBase.HTMLAttributes<HTMLJsConsoleWidgetElement>;
        }
    }
}
