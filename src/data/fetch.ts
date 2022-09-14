import { dsvFormat, autoType as d3AutoType } from 'd3-dsv';
import { FetchConnector } from '../spec';
import { DataComponent as DC } from '../runtime';
import { identity } from '../utils/helper';

export type FetchOptions = Omit<FetchConnector, 'type'>;

export const Fetch: DC<FetchOptions> = (options) => {
  const { value, format, delimiter = ',', autoType = false } = options;
  return async () => {
    const response = await fetch(value);
    if (format === 'csv') {
      // @see: https://github.com/d3/d3-dsv#dsv_parse
      const str = await response.text();
      return dsvFormat(delimiter).parse(str, autoType ? d3AutoType : identity);
    }
    const data = await response.json();
    // @see: https://github.com/d3/d3-dsv#autoType
    return autoType ? data.map((d) => d3AutoType(d)) : data;
  };
};

Fetch.props = {};
