/* eslint-disable no-console */
import { NativeModules } from 'react-native';

jest.mock(
  'react-native/Libraries/EventEmitter/NativeEventEmitter.js',
  () => () => ({
    addListener: () => {},
  }),
);

NativeModules.RNBackgroundTimer = {
  start: () => {
    console.log('start');
  },
  stop: () => {
    console.log('stop');
  },
  setTimeout: () => {
    console.log('setTimeout');
  },
  clearTimeout: () => {
    console.log('clearTimeout');
  },
};
