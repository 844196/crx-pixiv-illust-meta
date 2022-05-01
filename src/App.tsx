import { ErrorFallback } from './components/ErrorFallback';
import { IllustMeta, IllustMetaSkeleton } from './components/IllustMeta';
import { useIllustMeta } from './hooks/useIllustMeta';

export type AppProps = {
  illustId: string;
};

export function App({ illustId }: AppProps) {
  const { data, error } = useIllustMeta(illustId);

  if (error) {
    return (
      <ErrorFallback error={error} />
    );
  }

  if (!data) {
    return (
      <IllustMetaSkeleton />
    );
  }

  return (
    <IllustMeta {...data} />
  );
}
