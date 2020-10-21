// eslint-disable-next-line no-unused-vars
import BackgroundTimer from './index';

test('1 + 2 equal 3', () => {
  BackgroundTimer.runBackgroundTimer(() => {}, 100);
  expect(1 + 2).toBe(3);
});
