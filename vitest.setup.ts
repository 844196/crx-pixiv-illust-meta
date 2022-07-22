import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from './src/api/mock';
import './src/dayjs.setup';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
