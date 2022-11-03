import { Chart } from '@antv/g2';

const data = [
  { year: '1991', value: 15468 },
  { year: '1992', value: 16100 },
  { year: '1993', value: 15900 },
  { year: '1994', value: 17409 },
  { year: '1995', value: 17000 },
  { year: '1996', value: 31056 },
  { year: '1997', value: 31982 },
  { year: '1998', value: 32040 },
  { year: '1999', value: 33233 },
];

const chart = new Chart({
  container: 'container',
});

chart.data(data);

chart
  .area()
  .encode('x', 'year')
  .encode('y', 'value')
  .encode('shape', 'step') // 'area', 'smooth', 'step'
  .axis('y', { tickFormatter: '~s' })
  .style('opacity', 0.4);

chart
  .line()
  .encode('x', 'year')
  .encode('y', 'value')
  .encode('shape', 'hvh') // 'line', 'smooth', 'vh', 'hv', 'hvh'
  .axis(false);

chart.render();
