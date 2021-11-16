import merge from 'deepmerge';
import space from '~/space/src';
import sizes from '~/sizes/src';
import typography from '~/typography/src';
import colors from '~/colors/src';
import shadows from '~/shadows/src';
import radii from '~/radii/src';
import borders from '~/border/src';
import zIndices from '~/z-index/src';
import mdx from './mdx';

export const theme = merge.all(
  [
    { space },
    { sizes },
    typography,
    { colors },
    { shadows },
    { radii },
    { borders },
    { zIndices },
    { mdx },
  ],
  { arrayMerge: (t, s) => [...s, ...t] }
);
