import { Chart } from '@antv/g2';

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
];
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
});

chart.data(data);
chart.interaction('continuous-filter');
chart
  .interval()
  .position('year*value')
  .color('value');

chart.render();
