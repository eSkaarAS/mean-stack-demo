import { StringPipe } from './string.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new StringPipe();
    expect(pipe).toBeTruthy();
  });
});
