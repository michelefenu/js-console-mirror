import { Component, State, h } from '@stencil/core';

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

  private originalLog = console.log;
  private originalError = console.error;
  private originalWarn = console.warn;
  private originalInfo = console.info;
  private originalDebug = console.debug;

  componentWillLoad() {
    console.log = (...args) => {
      this.logs = [...this.logs, ...args.map(arg => ({ level: ErrorLevel.log, message: String(arg)}))];
      this.originalLog.apply(console, args);
    };
  }

  disconnectedCallback() {
    console.log = this.originalLog;
    console.error = this.originalError;
    console.warn = this.originalWarn;
    console.info = this.originalInfo;
    console.debug = this.originalDebug;
  }

  render() {
    return (
      <div class="console">
        <div class="title">CONSOLE OUTPUT</div>
        <div class="log-section">
          {this.logs.map(log => (
            <div class="log"><span class={log.level}>{`[${log.level.toLocaleUpperCase()}] ${log.message}`}</span></div>
          ))}
        </div>
      </div>
    );
  }
}
