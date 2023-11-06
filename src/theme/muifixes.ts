/* eslint-disable @typescript-eslint/no-explicit-any */
import base from './home';

const newBase = base as any;

newBase.typography.body1 = base.typography['body-lg'];
newBase.palette = {
  ...base.palette,
  secondary: base.palette.neutral,
  action: base.palette.primary,
  grey: base.palette.neutral,
};
newBase.typography.pxToRem = (v: any) => v * 16;
newBase.shape = base.unstable_sxConfig;
newBase.transitions = {};

export default newBase;
