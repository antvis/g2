import { Text, Group } from '@antv/g';
import { renderToMountedElement } from '../../src';

export function renderChartToMountedElement(
  options,
  { canvas },
  resolve = () => {},
) {
  canvas.ready.then(() => {
    canvas.appendChild(
      new Text({
        style: {
          text: 'Other Elements Rendered By G',
          textBaseline: 'top',
        },
      }),
    );
    const group = new Group({});
    canvas.appendChild(group);
    renderToMountedElement(options, { group }, resolve);
  });
  return canvas.getConfig().container;
}
