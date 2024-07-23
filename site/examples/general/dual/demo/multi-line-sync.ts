import { Chart } from '@antv/g2';

function syncTicksOfDomainsFromZero(scales) {
  scales.forEach((scale) => scale.update({ nice: true }));
  const normalize = (d) => d / Math.pow(10, Math.ceil(Math.log(d) / Math.LN10));
  const maxes = scales.map((scale) => scale.getOptions().domain[1]);
  const normalized = maxes.map(normalize);
  const normalizedMax = Math.max(...normalized);
  for (let i = 0; i < scales.length; i++) {
    const scale = scales[i];
    const domain = scale.getOptions().domain;
    const t = maxes[i] / normalized[i];
    const newDomainMax = normalizedMax * t;
    scale.update({ domain: [domain[0], newDomainMax] });
  }
}

const data = [
  {
    Month: 'Jan',
    Evaporation: 2,
    Precipitation: 2.6,
    Temperature: 2,
  },
  {
    Month: 'Feb',
    Evaporation: 4.9,
    Precipitation: 5.9,
    Temperature: 2.2,
  },
  {
    Month: 'Mar',
    Evaporation: 7,
    Precipitation: 9,
    Temperature: 3.3,
  },
  {
    Month: 'Apr',
    Evaporation: 23.2,
    Precipitation: 26.4,
    Temperature: 4.5,
  },
  {
    Month: 'May',
    Evaporation: 25.6,
    Precipitation: 28.7,
    Temperature: 6.3,
  },
  {
    Month: 'Jun',
    Evaporation: 76.7,
    Precipitation: 70.7,
    Temperature: 10.2,
  },
  {
    Month: 'Jul',
    Evaporation: 135.6,
    Precipitation: 175.6,
    Temperature: 20.3,
  },
  {
    Month: 'Aug',
    Evaporation: 162.2,
    Precipitation: 182.2,
    Temperature: 23.4,
  },
  {
    Month: 'Sep',
    Evaporation: 32.6,
    Precipitation: 48.7,
    Temperature: 23,
  },
  {
    Month: 'Oct',
    Evaporation: 20,
    Precipitation: 18.8,
    Temperature: 16.5,
  },
  {
    Month: 'Nov',
    Evaporation: 6.4,
    Precipitation: 6,
    Temperature: 12,
  },
  {
    Month: 'Dec',
    Evaporation: 3.3,
    Precipitation: 2.3,
    Temperature: 6.2,
  },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data(data);

chart
  .line()
  .encode('x', 'Month')
  .encode('y', 'Temperature')
  .encode('color', '#EE6666')
  .encode('shape', 'smooth')
  .scale('y', {
    independent: true,
    syncTicks: syncTicksOfDomainsFromZero,
  })
  .axis('y', {
    title: 'Temperature (°C)',
    grid: null,
    titleFill: '#EE6666',
  });

chart
  .interval()
  .encode('x', 'Month')
  .encode('y', 'Evaporation')
  .encode('color', '#5470C6')
  .scale('y', { independent: true })
  .style('fillOpacity', 0.8)
  .axis('y', {
    position: 'right',
    title: 'Evaporation (ml)',
    titleFill: '#5470C6',
  });

chart
  .line()
  .encode('x', 'Month')
  .encode('y', 'Precipitation')
  .encode('color', '#91CC75')
  .scale('y', { independent: true })
  .style('lineWidth', 2)
  .style('lineDash', [2, 2])
  .axis('y', {
    position: 'right',
    title: 'Precipitation (ml)',
    grid: null,
    titleFill: '#91CC75',
  });

chart.render();
