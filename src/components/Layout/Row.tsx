import { keyframes, styled } from '@stitches/react';

const shimmer = keyframes({
  '0%': {
    transform: 'translate(-100%)',
  },
  '100%': {
    transform: 'translate(100%)',
  },
});

export const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  variants: {
    loading: {
      true: {
        width: '100%',
        backgroundColor: '#858585',
        position: 'relative',
        overflow: 'hidden',
        height: '1em',
        margin: '0.25em 0',
        borderRadius: '999px',
        '&::before': {
          content: '',
          height: '100%',
          width: '100%',
          background:
            'linear-gradient(90deg, transparent, rgba(204, 204, 204, 0.5), transparent)',
          animation: `${shimmer()} 1.2s linear infinite`,
        },
      },
    },
  },
});
