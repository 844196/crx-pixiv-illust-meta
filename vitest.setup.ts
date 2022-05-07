import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from '@mock/server';

import './src/vendors/setup-dayjs';

Object.defineProperty(globalThis, 'IS_REACT_ACT_ENVIRONMENT', {
  // @ts-expect-error SEE: https://github.com/testing-library/react-testing-library/issues/1061#issuecomment-1119435440
  get: () => globalThis.self.IS_REACT_ACT_ENVIRONMENT as boolean | undefined,
});

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
