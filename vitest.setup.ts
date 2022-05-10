import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from '@mock/server';

import './src/dayjs.setup';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
