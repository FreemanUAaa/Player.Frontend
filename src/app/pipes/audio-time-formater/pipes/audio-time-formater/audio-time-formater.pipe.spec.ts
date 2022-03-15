import { AudioTimeFormaterPipe } from './audio-time-formater.pipe';

describe('AudioTimeFormaterPipe', () => {
  it('create an instance', () => {
    const pipe = new AudioTimeFormaterPipe();
    expect(pipe).toBeTruthy();
  });
});
