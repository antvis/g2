import { Band } from '@antv/scale';
import { stratify, hierarchy } from 'd3-hierarchy';
import { Primitive } from 'd3-array';
import { Vector2 } from '@antv/coord';
import { Scale } from '../runtime/types/component';
import { Channel } from '../runtime';

export type ChannelOptions = {
  shapes?: string[];
};

export function baseChannels(options: ChannelOptions = {}): Channel[] {
  const { shapes } = options;
  return [
    { name: 'color' },
    { name: 'opacity' },
    { name: 'shape', range: shapes },
    { name: 'enterType' },
    { name: 'enterDelay', scaleKey: 'enter' },
    { name: 'enterDuration', scaleKey: 'enter' },
    { name: 'enterEasing' },
    { name: 'key', scale: 'identity' },
    { name: 'groupKey', scale: 'identity' },
    { name: 'label', scale: 'identity' },
  ];
}

export function baseGeometryChannels(options: ChannelOptions = {}): Channel[] {
  return [...baseChannels(options), { name: 'title', scale: 'identity' }];
}

export function tooltip2d() {
  return [
    { type: 'maybeTitle', channel: 'color' },
    { type: 'maybeTooltip', channel: ['x', 'y'] },
  ];
}

export function tooltip1d() {
  return [
    { type: 'maybeTitle', channel: 'x' },
    { type: 'maybeTooltip', channel: ['y'] },
  ];
}

export function tooltipXd() {
  return [
    { type: 'maybeTitle', channel: 'color' },
    { type: 'maybeTooltip', channel: ['position'] },
  ];
}

export function baseAnnotationChannels(
  options: ChannelOptions = {},
): Channel[] {
  return baseChannels(options);
}

export function basePreInference() {
  return [{ type: 'maybeKey' }];
}

export function basePostInference() {
  return [];
}

export function bandWidth(scale: Band, x: any): number {
  return scale.getBandWidth(scale.invert(x));
}

export function createBandOffset(
  scale: Record<string, Scale>,
  value: Record<string, Primitive[]>,
  options: Record<string, any> = {},
): (d: [number, number], i?: number) => [number, number] {
  const { x: X, y: Y, series: S } = value;
  const { x, y, series } = scale;
  const {
    style: {
      bandOffset = series ? 0 : 0.5,
      bandOffsetX = bandOffset,
      bandOffsetY = bandOffset,
    } = {},
  } = options;
  const isBandX = !!x?.getBandWidth;
  const isBandY = !!y?.getBandWidth;
  const isSeries = !!series?.getBandWidth;
  if (!isBandX && !isBandY) return (d) => d;
  return (d, i) => {
    const widthX = isBandX ? bandWidth(x as Band, X[i]) : 0;
    const widthY = isBandY ? bandWidth(y as Band, Y[i]) : 0;
    const f = () => (bandWidth(series as Band, S[i]) / 2 + +S[i]) * widthX;
    const offset = isSeries && S ? f() : 0;
    const [x0, y0] = d;
    return [x0 + bandOffsetX * widthX + offset, y0 + bandOffsetY * widthY];
  };
}

export function p(d) {
  return parseFloat(d) / 100;
}

export function visualMark(index: number[], scale, value, coordinate) {
  const { x: X, y: Y } = value;
  const { innerWidth, innerHeight } = coordinate.getOptions();
  const P: Vector2[][] = Array.from(index, (i) => {
    const x0 = X[i];
    const y0 = Y[i];
    const x = typeof x0 === 'string' ? p(x0) * innerWidth : +x0;
    const y = typeof y0 === 'string' ? p(y0) * innerHeight : +y0;
    return [[x, y]];
  });
  return [index, P];
}

type Encode = 'string' | ((d: any) => any);

export function field(encode: Encode): (d: any) => any {
  return typeof encode === 'function' ? encode : (d) => d[encode];
}

export function valueof(data: Record<string, any>[], encode: Encode): any[] {
  return Array.from(data, field(encode));
}

export function initializeData(
  data: { nodes?: any[]; links: any[] },
  encode: Record<string, Encode>,
): {
  links: { target: string; source: string; value: any }[];
  nodes: { key: string }[];
} {
  const {
    source = (d) => d.source,
    target = (d) => d.target,
    value = (d) => d.value,
  } = encode;
  const { links, nodes } = data;
  const LS = valueof(links, source);
  const LT = valueof(links, target);
  const LV = valueof(links, value);
  return {
    links: links.map((_, i) => ({
      target: LT[i],
      source: LS[i],
      value: LV[i],
    })),
    nodes: nodes || Array.from(new Set([...LS, ...LT]), (key) => ({ key })),
  };
}

/**
 * @description Path need when the data is a flat json structure,
 * and the tree object structure do not need.
 */
export function generateHierarchyRoot(
  data: any[] | Record<string, any>,
  path: (d: any) => any,
) {
  if (Array.isArray(data)) {
    return typeof path === 'function'
      ? stratify().path(path)(data)
      : stratify()(data);
  }
  return hierarchy(data);
}
