import { Component, State, h, Element } from '@stencil/core';

enum ErrorLevel {
  info = 'info',
  log = 'log',
  debug = 'debug',
  warn = 'warn',
  error = 'error',
}

interface Log {
  level: ErrorLevel;
  message: string;
}

@Component({
  tag: 'js-console-widget',
  styleUrl: 'js-console-widget.css',
  shadow: true,
})
export class JsConsoleWidget {
  @State() logs: Log[] = [];

  @Element() el: HTMLElement;
  private logContainer: HTMLElement;

  private originalLog = console.log;
  private originalError = console.error;
  private originalWarn = console.warn;
  private originalInfo = console.info;
  private originalDebug = console.debug;

  componentWillLoad() {
    console.log = (...args) => {
      this.logs = [...this.logs, ...args.map(arg => ({ level: ErrorLevel.log, message: String(arg) }))];
      this.originalLog.apply(console, args);
    };

    console.error = (...args) => {
      this.logs = [...this.logs, ...args.map(arg => ({ level: ErrorLevel.error, message: String(arg) }))];
      this.originalError.apply(console, args);
    };

    console.warn = (...args) => {
      this.logs = [...this.logs, ...args.map(arg => ({ level: ErrorLevel.warn, message: String(arg) }))];
      this.originalWarn.apply(console, args);
    };

    console.info = (...args) => {
      this.logs = [...this.logs, ...args.map(arg => ({ level: ErrorLevel.info, message: String(arg) }))];
      this.originalInfo.apply(console, args);
    };

    console.debug = (...args) => {
      this.logs = [...this.logs, ...args.map(arg => ({ level: ErrorLevel.debug, message: String(arg) }))];
      this.originalDebug.apply(console, args);
    };
  }

  disconnectedCallback() {
    console.log = this.originalLog;
    console.error = this.originalError;
    console.warn = this.originalWarn;
    console.info = this.originalInfo;
    console.debug = this.originalDebug;
  }

  componentDidUpdate() {
    // Scroll to the bottom of the log container
    if (this.logContainer) {
      this.logContainer.scrollTop = this.logContainer.scrollHeight;
    }
  }

  render() {
    return (
      <div>
        <div class="title">CONSOLE OUTPUT</div>
        <div class="log-section" ref={el => this.logContainer = el}>
          {this.logs.map(log => (
            <div class="log-line">
              <span class={`log-level ${log.level}`}>{`[${log.level.toUpperCase()}]`}</span> {`${log.message}`}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
