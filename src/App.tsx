import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { IllustId } from '@external';

import { ErrorFallback } from './components/ErrorFallback';
import { IllustMeta, IllustMetaSkeleton } from './components/IllustMeta';

export type AppProps = {
  illustId: IllustId;
};

export function App({ illustId }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<IllustMetaSkeleton />}>
        <IllustMeta illustId={illustId} />
      </Suspense>
    </ErrorBoundary>
  );
}
