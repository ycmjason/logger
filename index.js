const chalk = require('chalk');

module.exports = function({ silent = false } = {}) {
  const log = silent? () => {}: console.log;
  const warn = silent? () => {}: console.warn;
  const error = silent? () => {}: console.error;

  return {
    clear:   ()      => console.clear(),
    log:     (...ss) => log(chalk.inverse(' LOG '), ...ss),
    print:   (...ss) => log(...ss),
    info:    (...ss) => log(chalk.bold.cyan(chalk.inverse(' INFO '), ...ss)),
    success: (...ss) => log(chalk.bold.green(chalk.inverse(' SUCCESS '), ...ss)),
    error:   (...ss) => error(chalk.bold.red(chalk.inverse(' ERROR '), ...ss)),
    warn:    (...ss) => warn(chalk.bold.yellow(chalk.inverse(' WARN '), ...ss)),
  };
};
