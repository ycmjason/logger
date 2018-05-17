const Logger = require('../index');

describe('logger', () => {
  const logger = new Logger();

  test('logger.log', () => logger.log('here is a log'));
  test('logger.print', () => logger.print('here is a print'));
  test('logger.info', () => logger.info('here is a info'));
  test('logger.success', () => logger.success('here is a success'));
  test('logger.error', () => logger.error('here is a error'));
  test('logger.warn', () => logger.warn('here is a warn'));

  describe('silent', () => {
    const logger = new Logger({ silent: true });
    test('[silent] logger.log', () => logger.log('here is a log'));
    test('[silent] logger.print', () => logger.print('here is a print'));
    test('[silent] logger.info', () => logger.info('here is a info'));
    test('[silent] logger.success', () => logger.success('here is a success'));
    test('[silent] logger.error', () => logger.error('here is a error'));
    test('[silent] logger.warn', () => logger.warn('here is a warn'));
  });
});
