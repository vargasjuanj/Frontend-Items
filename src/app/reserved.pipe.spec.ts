import { ReversedPipe } from './reversed.pipe';

describe('ReservedPipe', () => {
  it('create an instance', () => {
    const pipe = new ReversedPipe();
    expect(pipe).toBeTruthy();
  });
});
