import '@testing-library/jest-dom';

import './src/vendors/setup-dayjs';

// @ts-expect-error https://ja.reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
