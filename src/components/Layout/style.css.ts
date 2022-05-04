import { keyframes, style } from '@vanilla-extract/css';

const shimmer = keyframes({
  '0%': {
    transform: 'translate(-100%)',
  },
  '100%': {
    transform: 'translate(100%)',
  },
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '1.5em',
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#858585',
});

export const rowStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
});

export const rowSkeletonStyle = style({
  width: '100%',
  backgroundColor: '#858585',
  position: 'relative',
  overflow: 'hidden',
  height: '1em',
  margin: '0.25em 0',
  borderRadius: '999px',
  '::before': {
    content: '',
    height: '100%',
    width: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(204, 204, 204, 0.5), transparent)',
    animation: `${shimmer} 1.2s linear infinite`,
  },
});

export const columnStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25em',
});
