import { Cartesian, Polar, Transpose } from '../../../src/coordinate';

describe('coordinate', () => {
  it('Cartesian() returns expected coordinate transformations', () => {
    expect(Cartesian()).toEqual([['cartesian']]);
  });

  it('Transpose() returns expected coordinate transformations', () => {
    expect(Transpose()).toEqual([
      ['transpose'],
      ['translate', 0.5, 0.5],
      ['reflect.x'],
      ['translate', -0.5, -0.5],
    ]);
  });

  it('Polar({...}) returns expected coordinate transformations', () => {
    expect(Polar({})).toEqual([
      ['translate', 0.5, 0.5],
      ['reflect.y'],
      ['translate', -0.5, -0.5],
      ['polar', -Math.PI / 2, (Math.PI / 2) * 3, 0, 1],
    ]);

    expect(
      Polar({
        startAngle: 0,
        endAngle: Math.PI * 2,
        innerRadius: 0.2,
        outerRadius: 0.8,
      }),
    ).toEqual([
      ['translate', 0.5, 0.5],
      ['reflect.y'],
      ['translate', -0.5, -0.5],
      ['polar', 0, Math.PI * 2, 0.2, 0.8],
    ]);
  });
});
