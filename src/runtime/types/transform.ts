import { ColumnValue, EncodeSpec } from './encode';

export type TransformContext = {
  data?: any;
  I?: number[];
  encode?: Record<string, EncodeSpec>;
  columnOf?: ColumnOf;
  transform?: TransformSpec[];
};

export type TransformOptions = Record<string, any>;

export type TransformProps = {
  type: 'connector' | 'inference' | 'preprocessor' | 'statistic';
};

export type TransformComponent<O extends TransformOptions = TransformOptions> =
  {
    (options?: O): Transform;
    props?: TransformProps;
  };

export type Transform = (
  context: TransformContext,
) => TransformContext | Promise<TransformContext>;

export type TransformSpec = {
  type?: string | TransformComponent;
  [key: string]: any;
};

export type ColumnOf = (data: any, encode: EncodeSpec) => ColumnValue;
