import * as Layout from '../Layout';

export function IllustMetaSkeleton() {
  return (
    <Layout.Container role="status">
      <Layout.Row loading />
      <Layout.Row loading />
    </Layout.Container>
  );
}
