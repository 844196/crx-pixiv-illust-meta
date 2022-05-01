export type ErrorFallbackProps = {
  error: Error;
};

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <span role="alert">
      {error.message}
    </span>
  );
}
