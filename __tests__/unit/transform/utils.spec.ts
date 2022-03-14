import {
  useAsyncMemoTransform,
  useMemoTransform,
} from '../../../src/transform/utils';

describe('useMemo', () => {
  it('useMemoTransform returns a function memorizing with same data and options ', () => {
    const fn = jest.fn();
    const Add = ({ a, b }: { a: number; b: number }) => {
      return useMemoTransform(
        (c) => {
          fn();
          return a + b + c;
        },
        [a, b],
      );
    };

    const t1 = Add({ a: 1, b: 1 });

    expect(t1(1)).toBe(3);
    expect(t1(1)).toBe(3);
    expect(fn).toBeCalledTimes(1);
    expect(t1(2)).toBe(4);
    expect(fn).toBeCalledTimes(2);

    const t2 = Add({ a: 2, b: 2 });
    expect(t2(2)).toBe(6);
    expect(fn).toBeCalledTimes(3);
    expect(t2(2)).toBe(6);
    expect(fn).toBeCalledTimes(3);
  });

  it('useAsyncMemoTransform returns a async function memorizing with same data and options', async () => {
    const fn = jest.fn();
    const LazyAdd = ({ a, b }: { a: number; b: number }) => {
      return useAsyncMemoTransform(
        async (c) => {
          fn();
          await new Promise((resolve) => setTimeout(resolve, 500));
          return a + b + c;
        },
        [a, b],
      );
    };

    const t1 = LazyAdd({ a: 1, b: 1 });

    const r1 = await t1(1);
    expect(r1).toBe(3);

    const r2 = await t1(1);
    expect(r2).toBe(3);
    expect(fn).toBeCalledTimes(1);

    const r3 = await t1(2);
    expect(r3).toBe(4);
    expect(fn).toBeCalledTimes(2);

    const t2 = LazyAdd({ a: 2, b: 2 });
    const r4 = await t2(2);
    expect(r4).toBe(6);
    expect(fn).toBeCalledTimes(3);

    const r5 = await t2(2);
    expect(r5).toBe(6);
    expect(fn).toBeCalledTimes(3);
  });
});
