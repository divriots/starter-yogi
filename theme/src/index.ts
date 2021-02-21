import merge from 'deepmerge';
import { space } from '~/space';
import { sizes } from '~/sizes';
import { typography } from '~/typography';
import { colors } from '~/colors';
import { shadows } from '~/shadows';
import { radii } from '~/radii';
import { border } from '~/border';
import { zIndex } from '~/z-index';

export const theme = merge.all(
  [space, sizes, typography, colors, shadows, radii, border, zIndex],
  { arrayMerge: (t, s) => [...s, ...t] }
);
