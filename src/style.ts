import { createStitches } from '@stitches/react';

export const { styled, theme, css, keyframes } = createStitches({
  prefix: 'crx-illust-meta',
  theme: {
    fontSizes: {
      default: '12px',
    },
    lineHeights: {
      default: 1.5,
    },
    fontWeights: {
      default: 'bold',
    },
    colors: {
      default: '#858585',
    },
  },
});
