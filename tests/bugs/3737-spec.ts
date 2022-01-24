import { Chart } from '../../src';
import { createDiv } from '../util/dom';
const data = [
  { category: 'A', value: 1 },
  { category: 'A', value: 1.5 },
  { category: 'B', value: 2 },
  { category: 'B', value: 2 },
  { category: 'B', value: 2 },
  { category: 'B', value: 2 },
  { category: 'B', value: 2 },
  { category: 'B', value: 2 },
  { category: 'B', value: 2 },
  { category: 'B', value: 2 },
  //   {category: 'C', value: 2},
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'D', value: 3 },
  { category: 'E', value: 3 },
];

describe('#3737', () => {
  it('B类的点不应该出现在C类范围中', () => {
    const container = createDiv();
    const chart = new Chart({
      container,
      width: 400,
      height: 400,
    });

    chart.data(data);
    
    chart.scale('category', {
      type: 'cat',
      range: [0, 1],
      nice: true,
      values: ['A', 'B', 'C', 'D', 'E'],
    });
    
    chart.axis('category', {
      grid: {
        alignTick: false,
      },
    });

    chart.point().adjust('jitter').position('category*value');
    
    chart.render();

    const pointsB = chart.geometries[0].elements.filter((ele) => ele.getData().category === 'B');

    expect(pointsB.every((point) => {
      const bbox = point.shape.getBBox();
      const subWidth = chart.coordinateBBox.width / 5;
      const range = [chart.coordinateBBox.x + subWidth, chart.coordinateBBox.x + subWidth * 2];
      return bbox.maxX > range[0] && bbox.minX < range[1];
    })).toBe(true);
  });
});
