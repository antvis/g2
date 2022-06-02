import { G2Library } from '../runtime';
import { Canvas } from '../renderer';
import { Cartesian, Polar, Transpose, Parallel, Fisheye } from '../coordinate';
import { Constant, Field, Transform, Column } from '../encode';
import {
  Grid,
  Interval,
  Line,
  Point as PointGeometry,
  Text as TextGeometry,
  Area as AreaGeometry,
  Edge as EdgeGeometry,
  Image as ImageGeometry,
  Polygon as PolygonGeometry,
  Schema as SchemaGeometry,
} from '../mark/geometry';
import {
  AnnotationText,
  AnnotationLineX,
  AnnotationLineY,
  AnnotationConnector,
  AnnotationRange,
  AnnotationRangeX,
  AnnotationRangeY,
} from '../mark/annotation';
import { Category10, Category20 } from '../palette';
import {
  Linear,
  Ordinal,
  Band,
  Identity,
  Point,
  Time,
  Log,
  Pow,
  Threshold,
  Quantile,
  Quantize,
} from '../scale';
import {
  Rect as RectShape,
  HollowRect,
  Line as LineShape,
  HV,
  VH,
  HVH,
  Smooth,
  Bowtie,
  Cross,
  Diamond,
  Hexagon,
  HollowBowtie,
  HollowDiamond,
  HollowHexagon,
  HollowPoint,
  HollowSquare,
  HollowTriangle,
  HollowTriangleDown,
  Hyphen,
  LinePoint,
  Plus,
  Point as PointShape,
  Square,
  Tick,
  Triangle,
  TriangleDown,
  Text,
  AnnotationText as AnnotationTextShape,
  AnnotationBadge,
  AnnotationLine as AnnotationLineShape,
  AnnotationConnector as AnnotationConnectorShape,
  AnnotationRange as AnnotationRangeShape,
  Area,
  SmoothArea,
  Edge,
  Arc as ArcEdge,
  Image,
  Polygon,
  Box,
} from '../shape';
import { Light } from '../theme';
import { AxisX, AxisY, LegendCategory, LegendContinuous } from '../component';
import { ScaleInY, FadeIn } from '../animation';
import {
  ElementActive,
  Tooltip,
  Fisheye as FisheyeInteraction,
} from '../interaction';
import {
  SurfacePointSelection,
  HighlightSelection,
  Tooltip as TooltipAction,
  FisheyeFocus,
  Plot,
} from '../action';
import { MousePosition, TouchPosition } from '../interactor';
import { Layer, Flex, Mark, View, Rect } from '../composition';
import { Pack } from '../adjust';
import {
  MaybeTitleX,
  MaybeTooltipY,
  MaybeZeroX,
  MaybeZeroY1,
  MaybeStackY,
  MaybeSeries,
  MaybeTooltipPosition,
  MaybeArrayField,
  MaybeZeroY,
  MaybeSize,
  MaybeKey,
  StackY,
  DodgeX,
  StackEnter,
  Fetch,
  SortBy,
  FilterBy,
  Pick,
  Rename,
  Subset,
  Fold,
  WordCloud,
  Voronoi,
  Sankey,
  NormalizeY,
  Jitter,
  JitterY,
  SymmetryY,
} from '../transform';

export function createLibrary(): G2Library {
  return {
    'transform.fetch': Fetch,
    'transform.sortBy': SortBy,
    'transform.filterBy': FilterBy,
    'transform.pick': Pick,
    'transform.rename': Rename,
    'transform.subset': Subset,
    'transform.fold': Fold,
    'transform.wordCloud': WordCloud,
    'transform.voronoi': Voronoi,
    'transform.Sankey': Sankey,
    'transform.maybeZeroY1': MaybeZeroY1,
    'transform.maybeZeroX': MaybeZeroX,
    'transform.maybeStackY': MaybeStackY,
    'transform.maybeTitleX': MaybeTitleX,
    'transform.maybeTooltipY': MaybeTooltipY,
    'transform.maybeTooltipPosition': MaybeTooltipPosition,
    'transform.maybeArrayField': MaybeArrayField,
    'transform.maybeSeries': MaybeSeries,
    'transform.stackY': StackY,
    'transform.dodgeX': DodgeX,
    'transform.jitter': Jitter,
    'transform.jitterY': JitterY,
    'transform.symmetryY': SymmetryY,
    'transform.stackEnter': StackEnter,
    'transform.normalizeY': NormalizeY,
    'transform.maybeSize': MaybeSize,
    'transform.maybeZeroY': MaybeZeroY,
    'transform.maybeKey': MaybeKey,
    'renderer.canvas': Canvas,
    'coordinate.cartesian': Cartesian,
    'coordinate.polar': Polar,
    'coordinate.transpose': Transpose,
    'coordinate.parallel': Parallel,
    'coordinate.fisheye': Fisheye,
    'encode.constant': Constant,
    'encode.field': Field,
    'encode.transform': Transform,
    'encode.column': Column,
    'mark.interval': Interval,
    'mark.line': Line,
    'mark.point': PointGeometry,
    'mark.text': TextGeometry,
    'mark.grid': Grid,
    'mark.area': AreaGeometry,
    'mark.edge': EdgeGeometry,
    'mark.image': ImageGeometry,
    'mark.polygon': PolygonGeometry,
    'mark.schema': SchemaGeometry,
    'mark.annotation.text': AnnotationText,
    'mark.annotation.lineX': AnnotationLineX,
    'mark.annotation.lineY': AnnotationLineY,
    'mark.annotation.connector': AnnotationConnector,
    'mark.annotation.range': AnnotationRange,
    'mark.annotation.rangeX': AnnotationRangeX,
    'mark.annotation.rangeY': AnnotationRangeY,
    'palette.category10': Category10,
    'palette.category20': Category20,
    'scale.linear': Linear,
    'scale.ordinal': Ordinal,
    'scale.band': Band,
    'scale.identity': Identity,
    'scale.point': Point,
    'scale.time': Time,
    'scale.log': Log,
    'scale.pow': Pow,
    'scale.threshold': Threshold,
    'scale.quantile': Quantile,
    'scale.quantize': Quantize,
    'shape.rect': RectShape,
    'shape.hollowRect': HollowRect,
    'shape.line': LineShape,
    'shape.hv': HV,
    'shape.vh': VH,
    'shape.hvh': HVH,
    'shape.smooth': Smooth,
    'shape.bowtie': Bowtie,
    'shape.cross': Cross,
    'shape.diamond': Diamond,
    'shape.hexagon': Hexagon,
    'shape.hollowBowtie': HollowBowtie,
    'shape.hollowDiamond': HollowDiamond,
    'shape.hollowHexagon': HollowHexagon,
    'shape.hollowPoint': HollowPoint,
    'shape.hollowSquare': HollowSquare,
    'shape.hollowTriangle': HollowTriangle,
    'shape.hollowTriangleDown': HollowTriangleDown,
    'shape.hyphen': Hyphen,
    'shape.linePoint': LinePoint,
    'shape.plus': Plus,
    'shape.point': PointShape,
    'shape.square': Square,
    'shape.tick': Tick,
    'shape.triangle': Triangle,
    'shape.triangleDown': TriangleDown,
    'shape.text': Text,
    'shape.area': Area,
    'shape.smoothArea': SmoothArea,
    'shape.edge': Edge,
    'shape.arc': ArcEdge,
    'shape.image': Image,
    'shape.polygon': Polygon,
    'shape.box': Box,
    'shape.annotation.text': AnnotationTextShape,
    'shape.annotation.badge': AnnotationBadge,
    'shape.annotation.line': AnnotationLineShape,
    'shape.annotation.connector': AnnotationConnectorShape,
    'shape.annotation.range': AnnotationRangeShape,
    'theme.light': Light,
    'component.axisX': AxisX,
    'component.axisY': AxisY,
    'component.legendCategory': LegendCategory,
    'component.legendContinuous': LegendContinuous,
    'animation.scaleInY': ScaleInY,
    'animation.fadeIn': FadeIn,
    'interaction.elementActive': ElementActive,
    'interaction.tooltip': Tooltip,
    'interaction.fisheye': FisheyeInteraction,
    'action.surfacePointSelection': SurfacePointSelection,
    'action.highlightSelection': HighlightSelection,
    'action.tooltip': TooltipAction,
    'action.fisheyeFocus': FisheyeFocus,
    'action.plot': Plot,
    'interactor.mousePosition': MousePosition,
    'interactor.touchPosition': TouchPosition,
    'composition.layer': Layer,
    'composition.flex': Flex,
    'composition.mark': Mark,
    'composition.view': View,
    'composition.rect': Rect,
    'adjust.pack': Pack,
  };
}
