---
title: 图例（Legend）
order: 7.2
---

G2 中**图例（Legend）** 可以理解为是非空间通道（color，opacity，size，shape）对应比例尺的可视化。

## 配置方式

图例可以在 Mark 层级配置。在 G2 中，每个标记（Mark）都有自己的图例。如果标记对应的比例尺是同步的，那么图例也会合并。

```js
// Functional API
// 第一种方式
chart.interval().legend('color', {}).legend('size', {});

// Spec API
// 第二种方式
({
  type: 'interval',
  legend: {
    color: {},
    size: {},
  },
});
```

图例也可以在 View 层级配置。图例具有传递性。视图上声明的图例会传递给 `children` 声明的标记，如果该标记有对应通道的图例，就合并；否则不影响。

```js
// Functional API
// 第一种方式
chart.legend('color', {}).legend('size', {});

// Spec API
// 第二种方式
({
  type: 'view',
  legend: {
    color: {},
    size: {},
  },
});
```

## 隐藏图例

隐藏每个通道的图例：

```js
({
  type: 'interval',
  legend: { color: false }, // 隐藏 color 通道的图例
});
```

隐藏多个图例：

```js
({
  type: 'interval',
  legend: false,
});
```

绘制图例，G2 提供了两种图例类型：分类图例（Category Legend）和连续图例（Continuous Legend），分别用于展示分类数据和连续数据。

```js
// View Level
const viewLevel = {
  type: 'view',
  legend: {
    color: {},
    size: {},
  },
};

// Mark Level
const markLevel = {
  type: 'interval',
  legend: {
    color: {},
    size: {},
  },
};
```

```js
// API
chart.legend('x', {}).legend('y', {});

chart.interval().legend('x', {}).legend('y', {});
```

## 分类图例

```js | ob
(() => {
  const chart = new G2.Chart();

  chart.options({
    type: 'interval',
    data: {
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv',
      format: 'csv',
    },
    encode: { x: 'age', y: 'people', color: 'sex' },
    transform: [{ type: 'groupX', y: 'sum' }, { type: 'stackY' }],
    scale: { color: { type: 'ordinal' } },
    legend: { color: {} },
  });

  chart.render();

  return chart.getContainer();
})();
```

### 图例项

图例项通常由图标、标签和值三部分构成，在部分场景下也可能仅包含图标及标签。

<img alt="item" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*RSedT7GvlL4AAAAAAAAAAAAADmJ7AQ/original" height="80" />

| 属性                      | 描述                           | 类型                                                     | 默认值    |
| ------------------------- | ------------------------------ | -------------------------------------------------------- | --------- |
| itemMarker                | 图例项图标                     | `DisplayObject` \| `(datum, index, data)=>DisplayObject` | 'circle'  |
| itemMarkerFill            | 图例项图标填充色               | `string` \| `(datum, index, data)=>string`               | -         |
| itemMarkerFillOpacity     | 图例项图标填充色透明度         | `number` \| `(datum, index, data)=>number`               | -         |
| itemMarkerStroke          | 图例项图标描边色               | `string` \| `(datum, index, data)=>string`               | -         |
| itemMarkerStrokeOpacity   | 图例项图标描边色透明度         | `number` \| `(datum, index, data)=>number`               | -         |
| itemLabelText             | 图例项标签                     | `string` \| `(datum, index, data)=>string`               | -         |
| itemLabelFontSize         | 图例项标签文字大小             | `number` \| `(datum, index, data)=>number`               | -         |
| itemLabelFontFamily       | 图例项标签文字字体             | `string` \| `(datum, index, data)=>string`               | -         |
| itemLabelFontWeight       | 图例项标签字体粗细             | `number` \| `(datum, index, data)=>number`               | -         |
| itemLabelFill             | 图例项标签字体颜色             | `string` \| `(datum, index, data)=>string`               | -         |
| itemLabelFillOpacity      | 图例项标签字体透明度           | `number` \| `(datum, index, data)=>number`               | -         |
| itemLabelStroke           | 图例项标签描边色               | `string` \| `(datum, index, data)=>string`               | -         |
| itemLabelStrokeOpacity    | 图例项标签描边色透明度         | `number` \| `(datum, index, data)=>number`               | -         |
| itemValueText             | 图例项值                       | `string` \| `(datum, index, data)=>string`               | -         |
| itemValueFontSize         | 图例项值文字大小               | `number` \| `(datum, index, data)=>number`               | -         |
| itemValueFontFamily       | 图例项值文字字体               | `string` \| `(datum, index, data)=>string`               | -         |
| itemValueFontWeight       | 图例项值字体粗细               | `number` \| `(datum, index, data)=>number`               | -         |
| itemValueFill             | 图例项值字体颜色               | `string` \| `(datum, index, data)=>string`               | -         |
| itemValueFillOpacity      | 图例项值字体透明度             | `number` \| `(datum, index, data)=>number`               | -         |
| itemValueStroke           | 图例项值描边色                 | `string` \| `(datum, index, data)=>string`               | -         |
| itemValueStrokeOpacity    | 图例项值描边色透明度           | `number` \| `(datum, index, data)=>number`               | -         |
| itemSpan                  | 图例项图标、标签和值的空间划分 | `number` \| `number[]`                                   | [1, 1, 1] |
| itemSpacing               | 图例项图标、标签和值之间的间距 | `number` \| `number[]`                                   | -         |
| itemBackgroundFill        | 背景颜色                       | `string`                                                 | -         |
| itemBackgroundFillOpacity | 背景透明度                     | `number`                                                 | -         |

### 布局

默认采用**流式布局**。

<img alt="flow layout" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Lb43QoUm8ZEAAAAAAAAAAAAADmJ7AQ/original" width="400" />

当指定 `cols` 之后会采用**网格布局**。

<img alt="grid layout 1" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*IsmYSKexO00AAAAAAAAAAAAADmJ7AQ/original" width="400" />

<img alt="grid layout 2" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Mh1bQbp7jeMAAAAAAAAAAAAADmJ7AQ/original" width="400" />

| 属性       | 描述                                             | 类型               | 默认值 |
| ---------- | ------------------------------------------------ | ------------------ | ------ |
| layout     | 图例项布局方式，网格布局、流式布局               | `'flex'`\|`'grid'` | 'flex' |
| cols       | 指定每列显示的图例项数量，为空时表示列数不受限制 | `number`           | -      |
| colPadding | 图例项之间的横向间隔                             | `number`           | 0      |
| rowPadding | 图例项之间的纵向间隔                             | `number`           | 0      |
| maxRows    | 最多多少行                                       | `number`           | 3      |
| maxCols    | 最多多少列                                       | `number`           | 3      |

### 分页显示

图例项分页显示时能够控制分页器的行为。

<embed src="@/docs/manual/core/common/navigator.zh.md"></embed>

### 事件

| 事件类型   | 描述                 | 类型                      |
| ---------- | -------------------- | ------------------------- |
| click      | 点击图例项时触发     | `(item:Selection)=>void`  |
| mouseenter | 鼠标移入图例项时触发 | `(item: Selection)=>void` |
| mouseleave | 鼠标移出图例项时触发 | `(item:Selection)=>void`  |

## 连续图例

使用离散数据绘制视图时采用的图例类型。

<img alt="continuous" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*NgruQbickEAAAAAAAAAAAAAADmJ7AQ/original" height="50" />

```ts
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
});

chart
  .interval()
  .data({
    type: 'fetch',
    value:
      'https://gw.alipayobjects.com/os/bmw-prod/87b2ff47-2a33-4509-869c-dae4cdd81163.csv',
    format: 'csv',
  })
  .transform({ type: 'groupX', y: 'sum' })
  .encode('x', 'age')
  .encode('y', 'people')
  .encode('color', 'sex')
  .scale('color', { type: 'ordinal', range: ['#ca8861', '#675193'] })
  .legend('y', {
    ribbonLen: 200,
    ribbonSize: 30,
    labelFormatter: (datum, index, data) => datum.people.toLocaleString(),
    type: 'size',
    color: [
      '#d0e3fa',
      '#acc7f6',
      '#8daaf2',
      '#6d8eea',
      '#4d73cd',
      '#325bb1',
      '#5a3e75',
      '#8c3c79',
      '#e23455',
      '#e7655b',
    ],
  });

chart.render();
```

### 背景色带

连续数据的图例具有 4 种样式，分别为：

- 连续表示 `默认`

  <img alt="ribbon-color" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ds9pTqbi4OAAAAAAAAAAAAAADmJ7AQ/original" width="300" />

- 范围表示 `block=true`

  <img alt="ribbon-color" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kpDRTJVgkaEAAAAAAAAAAAAADmJ7AQ/original" width="300" />

- 尺寸表示 `type='size'`

  <img alt="ribbon-color" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*uHJYTbVSebgAAAAAAAAAAAAADmJ7AQ/original" width="300" />

- 尺寸、范围表示 `type='size'` `block=true`

  <img alt="ribbon-color" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*MahwS6sQocoAAAAAAAAAAAAADmJ7AQ/original" width="300" />

| 属性                | 描述                             | 类型                        | 默认值  |
| ------------------- | -------------------------------- | --------------------------- | ------- |
| color               | 色带颜色，为数组时会从中按序取色 | `string[]` \| `interpolate` | -       |
| block               | 是否按区间显示                   | `boolean`                   | false   |
| type                | 连续图例类型                     | `'size'` \| `'color'`       | 'color' |
| ribbonSize          | 色带尺寸                         | `number`                    | -       |
| ribbonFill          | 色带颜色                         | `string`                    | -       |
| ribbonFillOpacity   | 色带透明度                       | `number`                    | -       |
| ribbonStroke        | 色带描边色                       | `string`                    | -       |
| ribbonStrokeOpacity | 色带描边色透明度                 | `number`                    | -       |

> color 插值器参考 [d3-interpolate](https://github.com/d3/d3-interpolate)

### 滑动窗口

滑动窗口标记了当前的值选取范围，通过与滑动窗口交互能够对视图中的值范围进行选择。

 <img alt="slider-window" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*eAnbT6OFQlwAAAAAAAAAAAAADmJ7AQ/original" width="300" />

| 属性                      | 描述                 | 类型                           | 默认值     |
| ------------------------- | -------------------- | ------------------------------ | ---------- |
| handle                    | 是否显示滑动手柄     | `boolean`                      | true       |
| handleLabel               | 是否显示手柄文本     | `boolean`                      | true       |
| handleFormatter           | 手柄文本格式化       | `(datum)=>string`              | -          |
| slidable                  | 窗口是否可以滑动     | `boolean`                      | true       |
| range                     | 默认选择范围         | `[number, number]`             | [min, max] |
| step                      | 单次滑动步长         | `number`                       | 1          |
| handleMarkerFill          | 手柄图标颜色         | `string`                       | -          |
| handleMarkerFillOpacity   | 手柄图标色透明度     | `number`                       | -          |
| handleMarkerStroke        | 手柄图标描边色       | `string`                       | -          |
| handleMarkerStrokeOpacity | 手柄图标描边色透明度 | `number`                       | -          |
| handleLabelFontSize       | 手柄文字大小         | `number` \| `Function<number>` | -          |
| handleLabelFontFamily     | 手柄文字字体         | `string` \| `Function<string>` | -          |
| handleLabelFontWeight     | 手柄字体粗细         | `number` \|`Function<number>`  | -          |
| handleLabelFill           | 手柄字体颜色         | `string`                       | -          |
| handleLabelFillOpacity    | 手柄文本透明度       | `number`                       | -          |
| handleLabelStroke         | 手柄文本描边色       | `string`                       | -          |
| handleLabelStrokeOpacity  | 手柄文本描边色透明度 | `number`                       | -          |

### 刻度值

| 属性               | 描述                                                                  | 类型                            | 默认值     |
| ------------------ | --------------------------------------------------------------------- | ------------------------------- | ---------- |
| label              | 是否显示刻度值                                                        | `boolean`                       | true`      |
| labelFormatter     | 刻度值格式化                                                          | `(datum, index, data)=>string`  | -          |
| labelFilter        | 刻度值过滤                                                            | `(datum, index, data)=>boolean` | -          |
| labelDirection     | 刻度值位于色带的位置，参考 axis `direction`                           | `'positive'` \| `'negative'`    | 'positive' |
| labelSpacing       | 刻度值到色带的间距                                                    | `number`                        | 5          |
| labelAlign         | 刻度值对齐位置<br/> - `'value'` 对齐到刻度<br/>- `'range'` 对齐到范围 | `'value'`\|`'range'`            | 'value'    |
| labelFontSize      | 刻度值文字大小                                                        | `number` \| `Function<number>`  | -          |
| labelFontFamily    | 刻度值文字字体                                                        | `string` \| `Function<string>`  | -          |
| labelFontWeight    | 刻度值字体粗细                                                        | `number` \| `Function<number>`  | -          |
| labelStroke        | 刻度值字体颜色                                                        | `string`                        | -          |
| labelStrokeOpacity | 刻度值文本透明度                                                      | `number`                        | -          |

<b>刻度值对齐方式</b>

- 对齐到刻度

 <img alt="align-tick" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*vN1uQqWZ3K4AAAAAAAAAAAAADmJ7AQ/original" width="300" />

- 对齐到范围

 <img alt="align-range" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*R_C4QJ5JxgMAAAAAAAAAAAAADmJ7AQ/original" width="300" />

### 指示器

指示器是在与连续图例交互过程中指示当前所在位置所表示值大小的提示组件。

<img alt="indicator" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*NiI8Ta84y_MAAAAAAAAAAAAADmJ7AQ/original" height="50" />

| 属性                             | 描述                     | 类型                               | 默认值 |
| -------------------------------- | ------------------------ | ---------------------------------- | ------ |
| indicator                        | 是否显示值指示器         | `boolean`                          | true   |
| indicatorFormatter               | 值指示器格式化           | `(datum)=>string \| DisplayObject` | -      |
| indicatorLabelFontSize           | 值指示器文本文字大小     | `number` \| `Function<number>`     | -      |
| indicatorLabelFontFamily         | 值指示器文本文字字体     | `string` \| `Function<string>`     | -      |
| indicatorLabelFontWeight         | 值指示器文本字体粗细     | `number` \|`Function<number>`      | -      |
| indicatorLabelStroke             | 值指示器字体颜色         | `string`                           | -      |
| indicatorLabelStrokeOpacity      | 值指示器文本透明度       | `number`                           | -      |
| indicatorBackgroundFill          | 值指示器背景颜色         | `string`                           | -      |
| indicatorBackgroundFillOpacity   | 值指示器背景透明度       | `number`                           | -      |
| indicatorBackgroundStroke        | 值指示器背景描边色       | `string`                           | -      |
| indicatorBackgroundStrokeOpacity | 值指示器背景描边色透明度 | `number`                           | -      |

### 事件

| 事件类型    | 描述                       | 类型                                             |
| ----------- | -------------------------- | ------------------------------------------------ |
| valuechange | 滑动窗口选取范围改变时触发 | `(range: [number, number])=>void`                |
| indicate    | 指示器值改变时触发         | `(value: number, range: [number, number])=>void` |

## 自定义图例项图标

在具体开发过程中，内置的图例项图标可能无法满足你的要求，不用担心，G2提供了强大的自定义功能。

### 自定义符号（Symbol）

每一个符号都可以自定义，主要分为三步：

- 定义符号路径。
- 注册符号。
- 使用符号。

首先我们来看看如何定义符号路径。一个符号路径是一个函数，该函数接受起始点的横向坐标 x、纵向坐标 y 和绘制半径，返回一个路径。

```js
import { type SymbolFactor } from '@antv/g2';

const triangle: SymbolFactor = (x, y, r) => {
  const diffY = r * Math.sin((1 / 3) * Math.PI);
  return [
    ['M', x - r, y + diffY],
    ['L', x, y - diffY],
    ['L', x + r, y + diffY],
    ['Z'],
  ];
};
triangle.style = ['fill'];
```

接下来就是注册符号，通过调用 `G2.register('symbol.${symbol}', Symbol)` 来完成注册。其中 `symbol` 是符号的名字，`Symbol` 是定义好的符号路径。比如注册一个三角形的符号：

```js
import { register } from '@antv/g2';

register('symbol.customTriangle', triangle);
```

最后就是使用该符号了

```js
legend: { 
  color: {
    itemMarker: 'customTriangle'
  } 
}
```

### 使用图片

```js | ob
(() => {
  const chart = new G2.Chart();

  const logo = [
  [
    '抖音',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8IXHQLvx9QkAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '快手',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*swueRrrKvbcAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '小米',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*79G3TIt3mBoAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '微信',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_ELBTJLp0dQAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'Keep',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JzbKRpFhR14AAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'Chrome',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*xLnYTaZfdh8AAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'QQ',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*AbGNTpA5JLwAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '优酷',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*UL6lS4jw9lUAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '百度地图',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*I6nrTITAxcoAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '腾讯视频',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*zwVvT5OFnuYAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '哔哩哔哩',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*6jkAQayTiMMAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'Word',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*FbkXT6K6mVEAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'Excel',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*CKb-R6ZAFpYAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'PowerPoint',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*K7-FT4RYRqIAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '腾讯会议',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*xbPXR7snu44AAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '网易云音乐',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*upKlRJ9QB4cAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'Safari',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kjDHRbiW734AAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '地图',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tl-2QIB8LKIAAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'Docker',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*iJ4dS49yrJ4AAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    'VSCode',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*rR6nRInEcz4AAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '百度网盘',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*futaTbIAkG4AAAAAAAAAAAAADmJ7AQ/original',
  ],
  [
    '印象笔记',
    'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Skh1S4BfL9oAAAAAAAAAAAAADmJ7AQ/original',
  ],
];

chart
  .interval()
  .data(logo)
  .encode('x', (d) => d[0])
  .encode('y', () => Math.random())
  .encode('color', (d) => d[1])
  .scale('y', { nice: true })
  .legend({
    color: {
      itemMarker: (_, index) => () => {
        const { document } = chart.getContext().canvas;
        const image = document.createElement('image', {
          style: {
            width: 20,
            height: 20,
            transform: `translate(-10, -10)`,
            src: logo[index][1],
          },
        });
        return image;
      },
      itemMarkerSize: 40,
      itemLabelText: (_, index) => logo[index][0],
      maxRows: 1,
    },
  })
  .tooltip(false);

  chart.render();

  return chart.getContainer();
})();
```

## 自定义图例（Legend）

G2 内置的图例是用 canvas 或者 svg 绘制的，如果希望能用 HTML 渲染图例，就可以按照如下几步自定义图例：

- 关闭内置图例并且渲染图表。
- 等待图表渲染完成，根据 scale 数据渲染 HTML 图例。
- 添加交互（如果需要）。

首先是关闭内置图例，同时渲染图表。

```js
chart.options({ legend: false });
```

然后是等待图表渲染完成，并且调用 `legendColor` 渲染 HTML 图例：

```js
chart.render().then(legendColor);
```

在 `legendColor` 里我们首先需要把图例画出来，下面这个例子把图例画出来后，添加到了画布前面：

```js
function legendColor(chart) {
  const node = chart.getContainer();
  const legend = document.createElement('div');
  node.insertBefore(legend, node.childNodes[0]);

  // ...
}
```

画出了图例之后，我们需要绘制图例项，这个数据从对应通道的比例尺获得：`chart.getScale().color`，并且通过 scale 的 domain 和 range 获得对应的名字和值。

```js
function legendColor(chart) {
  // ...
  const scale = chart.getScale().color;
  const { domain } = scale.getOptions();
  const items = domain.map(() => {});
  // ...
}
```

绘制完图例项之后我们就应该给每个图例项通过 `item.onclick` 添加交互，收集当前选中的值，并且根据这个值去给图表的声明添加 Filter 转换，最后重新渲染图表。最后完整的实现如下：

```js | ob
(() => {
  // 添加图例
  function legendColor(chart) {
    // 创建 Legend 并且挂载图例
    const node = chart.getContainer();
    const legend = document.createElement('div');
    legend.style.display = 'flex';
    node.insertBefore(legend, node.childNodes[0]);

    // 创建并挂载 Items
    const { color: scale } = chart.getScale();
    const { domain } = scale.getOptions();
    const items = domain.map((value) => {
      const item = document.createElement('div');
      const color = scale.map(value);
      item.style.marginLeft = '1em';
      item.innerHTML = `
      <span style="
        background-color:${color};
        display:inline-block;
        width:10px;
        height:10px;"
      ></span>
      <span>${value}</span>
      `;
      return item;
    });
    items.forEach((d) => legend.append(d));

    // 监听事件
    const selectedValues = [...domain];
    const options = chart.options();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const value = domain[i];
      item.style.cursor = 'pointer';
      item.onclick = () => {
        const index = selectedValues.indexOf(value);
        if (index !== -1) {
          selectedValues.splice(index, 1);
          item.style.opacity = 0.5;
        } else {
          selectedValues.push(value);
          item.style.opacity = 1;
        }
        changeColor(selectedValues);
      };
    }

    // 重新渲染视图
    function changeColor(value) {
      const { transform = [] } = options;
      const newTransform = [{ type: 'filter', color: { value } }, ...transform];
      chart.options({
        ...options,
        transform: newTransform, // 指定新的 transform
        scale: { color: { domain } },
      });
      chart.render(); // 重新渲染图表
    }
  }

  // 绘制图表
  const container = document.createElement('div');

  const chart = new G2.Chart({
    
    container,
  });

  chart.options({
    type: 'interval',
    data: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ],
    encode: { x: 'genre', y: 'sold', color: 'genre' },
    legend: false,
  });

  chart.render().then(legendColor);

  return chart.getContainer();
})();
```

## 通用选项

### 标题

<embed src="@/docs/manual/core/common/componentTitle.zh.md"></embed>

### 布局

Legend 组件支持调整其在画布中的位置，通过 `layout` 属性来设置。
目前支持基本的 Flex 布局方式，支持的属性包括: `justifyContent`, `alignItems`, `flexDirection`。

| 属性           | 描述         | 类型                                         | 默认值         |
| -------------- | ------------ | -------------------------------------------- | -------------- |
| justifyContent | 主轴对齐方式 | `'flex-start'` \| `'flex-end'` \| `'center'` | `'flex-start'` |
| alignItems     | 交叉轴对齐   | `'flex-start'` \| `'flex-end'` \| `'center'` | `'flex-start'` |
| flexDirection  | 主轴方向     | `'row'` \| `'column'`                        | `'row'`        |

```ts
chart
  .interval()
  .data(/** data */)
  .encode('x' /** x filed */)
  .encode('y' /** y filed */)
  .encode('color' /** color filed */)
  .legend('color', {
    /** 让图例在水平和垂直方向上保持居中 */
    layout: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  });
```

