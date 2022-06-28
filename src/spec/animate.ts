export type AnimationTypes = 'fadeIn' | 'fadeOut' | 'scaleInX' | 'scaleInY';

export type Animation = {
  type?: AnimationTypes;
  duration?: number;
  delay?: number;
  easing?: string;
  fill?: 'forwards' | 'none' | 'backwards' | 'forwards' | 'both' | 'auto';
};
