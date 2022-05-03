import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from './src/mocks/server';
import './src/vendors/setup-dayjs';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
