import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './components/ErrorFallback';
import { IllustMeta, IllustMetaSkeleton } from './components/IllustMeta';
import { IllustId } from './types/IllustId';

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
