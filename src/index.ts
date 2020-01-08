import { GeometryCfg } from './geometry/base';
import { PathCfg } from './geometry/path';
import { IInteractionContext } from './interface';

// register G engine
import * as CanvasEngine from '@antv/g-canvas';
import * as SVGEngine from '@antv/g-svg';
import { registerEngine } from './core';

registerEngine('canvas', CanvasEngine);
registerEngine('svg', SVGEngine);

// 注册 G2 内置的 geometry
import { registerGeometry } from './core';
import Area from './geometry/area';
import Edge from './geometry/edge';
import Interval from './geometry/interval';
import Line from './geometry/line';
import Path from './geometry/path';
import Point from './geometry/point';
import Polygon from './geometry/polygon';
import Schema from './geometry/schema';

registerGeometry('Polygon', Polygon);
registerGeometry('Interval', Interval);
registerGeometry('Schema', Schema);
registerGeometry('Path', Path);
registerGeometry('Point', Point);
registerGeometry('Line', Line);
registerGeometry('Area', Area);
registerGeometry('Edge', Edge);

// 引入所有内置的 shapes
import './geometry/shape/area/line';
import './geometry/shape/area/smooth';
import './geometry/shape/area/smooth-line';

import './geometry/shape/edge/arc';
import './geometry/shape/edge/smooth';
import './geometry/shape/edge/vhv';

import './geometry/shape/interval/funnel';
import './geometry/shape/interval/hollow-rect';
import './geometry/shape/interval/line';
import './geometry/shape/interval/pyramid';
import './geometry/shape/interval/tick';

import './geometry/shape/line/step';

import './geometry/shape/point/hollow';
import './geometry/shape/point/image';
import './geometry/shape/point/solid';

import './geometry/shape/schema/box';
import './geometry/shape/schema/candle';

// 注册 Geometry 内置的 label
import { registerGeometryLabel } from './core';
import GeometryLabel from './geometry/label/base';
import IntervalLabel from './geometry/label/interval';
import PieLabel from './geometry/label/pie';
import PolarLabel from './geometry/label/polar';

registerGeometryLabel('base', GeometryLabel);
registerGeometryLabel('interval', IntervalLabel);
registerGeometryLabel('pie', PieLabel);
registerGeometryLabel('polar', PolarLabel);

// 注册需要的动画执行函数
import { fadeIn, fadeOut } from './animate/animation/fade';
import { growInX, growInXY, growInY } from './animate/animation/grow-in';
import { scaleInX, scaleInY } from './animate/animation/scale-in';
import { sectorPathUpdate } from './animate/animation/sector-path-update';
import { textUpdate } from './animate/animation/text-update';
import { waveIn } from './animate/animation/wave-in';
import { zoomIn, zoomOut } from './animate/animation/zoom';
import { registerAnimation } from './core';

registerAnimation('fadeIn', fadeIn);
registerAnimation('fadeOut', fadeOut);
registerAnimation('growInX', growInX);
registerAnimation('growInXY', growInXY);
registerAnimation('growInY', growInY);
registerAnimation('scaleInX', scaleInX);
registerAnimation('scaleInY', scaleInY);
registerAnimation('waveIn', waveIn);
registerAnimation('zoomIn', zoomIn);
registerAnimation('zoomOut', zoomOut);
registerAnimation('textUpdate', textUpdate);
registerAnimation('sectorPathUpdate', sectorPathUpdate);

// 注册内置的 Facet
import { registerFacet } from './core';
import Rect from './facet/rect';

registerFacet('rect', Rect);

// 注册内置的 Component
import { registerComponentController } from './core';

import Annotation from './chart/controller/annotation';
import Axis from './chart/controller/axis';
import Legend from './chart/controller/legend';
import Tooltip from './chart/controller/tooltip';

// register build-in components
registerComponentController('axis', Axis);
registerComponentController('legend', Legend);
registerComponentController('tooltip', Tooltip);
registerComponentController('annotation', Annotation);

// 注册 Interaction Action
import { registerAction } from './core';
import ActiveRegion from './interaction/action/active-region';
import TooltipAction from './interaction/action/component/tooltip';
import ElmentActive from './interaction/action/element/active';
import ElmentRangeActive from './interaction/action/element/range-active';
import ElmentSingleActive from './interaction/action/element/single-active';

import ElmentHighlight from './interaction/action/element/highlight';
import ElmentRangeHighlight from './interaction/action/element/range-highlight';
import ElmentSingleHighlight from './interaction/action/element/single-highlight';

import PieSelected from './interaction/action/element/pie-selected';
import ElementRangeSelected from './interaction/action/element/range-selected';
import ElementSelected from './interaction/action/element/selected';
import ElementSingleSelected from './interaction/action/element/single-selected';

import ListActive from './interaction/action/component/list-active';
import ListHighlight from './interaction/action/component/list-highlight';
import ListSelected from './interaction/action/component/list-selected';
import ListUnchecked from './interaction/action/component/list-unchecked';

import CircleMask from './interaction/action/mask/circle';
import PathMask from './interaction/action/mask/path';
import RectMask from './interaction/action/mask/rect';
import SmoothPathMask from './interaction/action/mask/smooth-path';

import CursorAction from './interaction/action/cursor';
import DataFilter from './interaction/action/data/filter';
import DataRangeFilter from './interaction/action/data/range-filter';

import ElementFilter from './interaction/action/element/filter';
import ButtonAction from './interaction/action/view/button';
import ViewDrag from './interaction/action/view/drag';
import ViewMove from './interaction/action/view/move';
import ScaleTranslate from './interaction/action/view/scale-translate';
import ScaleZoom from './interaction/action/view/scale-zoom';

registerAction('tooltip', TooltipAction);
registerAction('element-active', ElmentActive);
registerAction('element-single-active', ElmentSingleActive);
registerAction('element-range-active', ElmentRangeActive);

registerAction('element-highlight', ElmentHighlight);
registerAction('element-single-highlight', ElmentSingleHighlight);
registerAction('element-range-highlight', ElmentRangeHighlight);

registerAction('element-selected', ElementSelected);
registerAction('element-single-selected', ElementSingleSelected);
registerAction('element-range-selected', ElementRangeSelected);
registerAction('pie-selected', PieSelected);

registerAction('active-region', ActiveRegion);
registerAction('list-active', ListActive);
registerAction('list-selected', ListSelected);
registerAction('list-highlight', ListHighlight);
registerAction('list-unchecked', ListUnchecked);

registerAction('rect-mask', RectMask);
registerAction('circle-mask', CircleMask);
registerAction('path-mask', PathMask);
registerAction('smooth-path-mask', SmoothPathMask);

registerAction('cursor', CursorAction);
registerAction('data-filter', DataFilter);
registerAction('brush', DataRangeFilter);
registerAction('brush-x', DataRangeFilter, { dims: ['x'] });
registerAction('brush-y', DataRangeFilter, { dims: ['y'] });
registerAction('element-filter', ElementFilter);
registerAction('view-drag', ViewDrag);
registerAction('view-move', ViewMove);

registerAction('scale-translate', ScaleTranslate);
registerAction('scale-zoom', ScaleZoom);
registerAction('reset-button', ButtonAction, {
  name: 'reset-button',
  text: 'reset',
});

// 注册默认的 Interaction 交互行为
import { registerInteraction } from './core';

function isPointInView(context: IInteractionContext) {
  return context.isInPlot();
}

// 注册 tooltip 的 interaction
registerInteraction('tooltip', {
  start: [{ trigger: 'plot:mousemove', action: 'tooltip:show' }],
  end: [{ trigger: 'plot:mouseleave', action: 'tooltip:hide' }],
});

// 移动到 elment 上 active
registerInteraction('element-active', {
  start: [{ trigger: 'element:mouseenter', action: 'element-active:active' }],
  end: [{ trigger: 'element:mouseleave', action: 'element-active:reset' }],
});

// 点击选中，允许取消
registerInteraction('element-selected', {
  start: [{ trigger: 'element:click', action: 'element-selected:toggle' }],
});

// 点击选中，允许取消
registerInteraction('element-highlight', {
  start: [{ trigger: 'element:mouseenter', action: 'element-highlight:highlight' }],
  end: [{ trigger: 'element:mouseleave', action: 'element-highlight:reset' }],
});

// legend hover，element active
registerInteraction('legend-active', {
  start: [{ trigger: 'legend-item:mouseenter', action: ['list-active:active', 'element-active:active'] }],
  end: [{ trigger: 'legend-item:mouseleave', action: ['list-active:reset', 'element-active:reset'] }],
});

// legend hover，element active
registerInteraction('legend-highlight', {
  start: [{ trigger: 'legend-item:mouseenter', action: ['list-highlight:highlight', 'element-highlight:highlight'] }],
  end: [{ trigger: 'legend-item:mouseleave', action: ['list-highlight:reset', 'element-highlight:reset'] }],
});

// legend hover，element active
registerInteraction('axis-label-highlight', {
  start: [{ trigger: 'axis-label:mouseenter', action: ['list-highlight:highlight', 'element-highlight:highlight'] }],
  end: [{ trigger: 'axis-label:mouseleave', action: ['list-highlight:reset', 'element-highlight:reset'] }],
});

// legend hover，element active
registerInteraction('element-list-highlight', {
  start: [{ trigger: 'element:mouseenter', action: ['list-highlight:highlight', 'element-highlight:highlight'] }],
  end: [{ trigger: 'element:mouseleave', action: ['list-highlight:reset', 'element-highlight:reset'] }],
});

// 框选
registerInteraction('element-range-highlight', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' },
  ],
  start: [
    {
      trigger: 'mousedown',
      isEnable: isPointInView,
      action: ['element-range-highlight:start', 'rect-mask:start', 'rect-mask:show'],
    },
  ],
  processing: [
    {
      trigger: 'mousemove',
      isEnable: isPointInView,
      action: ['element-range-highlight:highlight', 'rect-mask:resize'],
    },
  ],
  end: [
    { trigger: 'mouseup', isEnable: isPointInView, action: ['element-range-highlight:end', 'rect-mask:end'] },
    {
      trigger: 'document:mouseup',
      isEnable(context) {
        return !context.isInPlot();
      },
      action: ['element-range-highlight:clear', 'rect-mask:end', 'rect-mask:hide'],
    },
  ],
  rollback: [{ trigger: 'dblclick', action: ['element-range-highlight:clear', 'rect-mask:hide'] }],
});

registerInteraction('element-brush', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' },
  ],
  start: [
    {
      trigger: 'mousedown',
      isEnable: isPointInView,
      action: ['brush:start', 'rect-mask:start', 'rect-mask:show'],
    },
  ],
  processing: [
    {
      trigger: 'mousemove',
      isEnable: isPointInView,
      action: ['rect-mask:resize'],
    },
  ],
  end: [
    {
      trigger: 'mouseup',
      isEnable: isPointInView,
      action: ['brush:filter', 'brush:end', 'rect-mask:end', 'rect-mask:hide', 'reset-button:show'],
    },
  ],
  rollback: [{ trigger: 'reset-button:click', action: ['brush:reset', 'reset-button:hide', 'cursor:crosshair'] }],
});

registerInteraction('element-brush-x', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' },
  ],
  start: [
    {
      trigger: 'mousedown',
      isEnable: isPointInView,
      action: ['brush-x:start', 'rect-mask:start', 'rect-mask:show'],
    },
  ],
  processing: [
    {
      trigger: 'mousemove',
      isEnable: isPointInView,
      action: ['rect-mask:resize'],
    },
  ],
  end: [
    {
      trigger: 'mouseup',
      isEnable: isPointInView,
      action: ['brush-x:filter', 'brush-x:end', 'rect-mask:end', 'rect-mask:hide'],
    },
  ],
  rollback: [{ trigger: 'dblclick', action: ['brush-x:reset'] }],
});

registerInteraction('element-path-highlight', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' },
  ],
  start: [
    { trigger: 'mousedown', isEnable: isPointInView, action: 'path-mask:start' },
    { trigger: 'mousedown', isEnable: isPointInView, action: 'path-mask:show' },
  ],
  processing: [{ trigger: 'mousemove', action: 'path-mask:addPoint' }],
  end: [{ trigger: 'mouseup', action: 'path-mask:end' }],
  rollback: [{ trigger: 'dblclick', action: 'path-mask:hide' }],
});

// 点击选中，允许取消
registerInteraction('element-single-selected', {
  start: [{ trigger: 'element:click', action: 'element-single-selected:toggle' }],
});

// 饼图的选中
registerInteraction('pie-selected', {
  start: [
    {
      trigger: 'interval:click',
      isEnable(context) {
        const coord = context.view.getCoordinate();
        return coord.type === 'theta';
      },
      action: 'pie-selected:toggle',
    },
  ],
});

// 筛选数据
registerInteraction('legend-filter', {
  showEnable: [
    { trigger: 'legend-item:mouseenter', action: 'cursor:pointer' },
    { trigger: 'legend-item:mouseleave', action: 'cursor:default' },
  ],
  start: [
    { trigger: 'legend-item:click', action: 'list-unchecked:toggle' },
    { trigger: 'legend-item:click', action: 'data-filter:filter' },
  ],
});

// 筛选数据
registerInteraction('continuous-filter', {
  start: [{ trigger: 'legend:valuechanged', action: 'data-filter:filter' }],
});
// 筛选数据
registerInteraction('continuous-visible-filter', {
  start: [{ trigger: 'legend:valuechanged', action: 'element-filter:filter' }],
});

// 筛选图形
registerInteraction('legend-visible-filter', {
  showEnable: [
    { trigger: 'legend-item:mouseenter', action: 'cursor:pointer' },
    { trigger: 'legend-item:mouseleave', action: 'cursor:default' },
  ],
  start: [
    { trigger: 'legend-item:click', action: 'list-unchecked:toggle' },
    { trigger: 'legend-item:click', action: 'element-filter:filter' },
  ],
});

// 出现背景框
registerInteraction('active-region', {
  start: [{ trigger: 'plot:mousemove', action: 'active-region:show' }],
  end: [{ trigger: 'plot:mouseleave', action: 'active-region:hide' }],
});


// 让 TS 支持 View 原型上添加的创建 Geometry 方法的智能提示
/**
 * 往 View 原型上添加的创建 Geometry 的方法
 *
 * Tips:
 * view module augmentation, detail: http://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
declare module './chart/view' {
  interface View {
    /**
     * 创建 Polygon 几何标记
     * @param [cfg] 传入 Polygon 构造函数的配置
     * @returns polygon 返回 Polygon 实例
     */
    polygon(cfg?: Partial<GeometryCfg>): Polygon;
    /**
     * 创建 Point 几何标记
     * @param [cfg] 传入 Point 构造函数的配置
     * @returns point 返回 Point 实例
     */
    point(cfg?: Partial<GeometryCfg>): Point;
    /**
     * 创建 Interval 几何标记
     * @param [cfg] 传入 Interval 构造函数的配置
     * @returns interval 返回 Interval 实例
     */
    interval(cfg?: Partial<GeometryCfg>): Interval;
    /**
     * 创建 Schema 几何标记
     * @param [cfg] 传入 Schema 构造函数的配置
     * @returns schema 返回 Schema 实例
     */
    schema(cfg?: Partial<GeometryCfg>): Schema;
    /**
     * 创建 Path 几何标记
     * @param [cfg] 传入 Path 构造函数的配置
     * @returns path 返回 Path 实例
     */
    path(cfg?: Partial<PathCfg>): Path;
    /**
     * 创建 Line 几何标记
     * @param [cfg] 传入 Line 构造函数的配置
     * @returns line 返回 Line 实例
     */
    line(cfg?: Partial<PathCfg>): Line;
    /**
     * 创建 Area 几何标记
     * @param [cfg] 传入 Area 构造函数的配置
     * @returns area 返回 Area 实例
     */
    area(cfg?: Partial<PathCfg>): Area;
    /**
     * 创建 Edge 几何标记
     * @param [cfg] 传入 Edge 构造函数的配置
     * @returns schema 返回 Edge 实例
     */
    edge(cfg?: Partial<GeometryCfg>): Edge;
  }
}

export * from './core';
