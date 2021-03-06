import { ComponentProps } from 'react';

import { SVGBase } from './SVGBase';

export function Heart(props: Omit<ComponentProps<typeof SVGBase>, 'viewBox'>) {
  return (
    <SVGBase viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M9,0.75 C10.6568542,0.75 12,2.09314575 12,3.75 C12,6.68851315 10.0811423,9.22726429 6.24342696,11.3662534 L6.24342863,11.3662564 C6.09210392,11.4505987 5.90790324,11.4505988 5.75657851,11.3662565 C1.9188595,9.22726671 0,6.68851455 0,3.75 C1.1324993e-16,2.09314575 1.34314575,0.75 3,0.75 C4.12649824,0.75 5.33911281,1.60202454 6,2.66822994 C6.66088719,1.60202454 7.87350176,0.75 9,0.75 Z"
      />
    </SVGBase>
  );
}
