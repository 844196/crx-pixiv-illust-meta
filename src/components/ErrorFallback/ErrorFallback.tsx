import * as Layout from '../Layout';

export type ErrorFallbackProps = {
  error: Error;
};

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <Layout.Container role="alert">
      <Layout.Row>
        <Layout.Column>
          {error.message}
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  );
}
