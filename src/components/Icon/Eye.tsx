import { ComponentProps } from 'react';

import { SVGBase } from './SVGBase';

export function Eye(props: Omit<ComponentProps<typeof SVGBase>, 'viewBox'>) {
  return (
    <SVGBase viewBox="0 0 14 12" {...props}>
      <path
        fill="#858585"
        d="M0 6c2-3.333 4.333-5 7-5s5 1.667 7 5c-2 3.333-4.333 5-7 5S2 9.333 0 6z"
      />
      <path
        fill="#ccc"
        d="M7 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      />
    </SVGBase>
  );
}
