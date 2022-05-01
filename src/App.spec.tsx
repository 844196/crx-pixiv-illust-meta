import { render, screen } from '@testing-library/react';

import { App } from './App';
import { mockedIllustIds } from './mocks/db';

describe('<App />', () => {
  describe('存在しない/削除されたとき', () => {
    const spy = vi.spyOn(console, 'error');

    beforeAll(() => {
      // ドキッとするので何もしない実装に差し替える
      spy.mockImplementation(() => { /** NOOP */ });
    });

    afterAll(() => {
      spy.mockRestore();
    });

    it('エラーが表示されること', async () => {
      render(<App illustId={mockedIllustIds['存在しない・削除された']} />);

      expect(await screen.findByRole('status')).toBeInTheDocument();

      const alert = await screen.findByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent('該当作品は削除されたか、存在しない作品IDです。');
    });
  });

  it('閲覧数0・ブックマーク数0のとき', async () => {
    render(<App illustId={mockedIllustIds['閲覧数0・ブックマーク数0']} />);

    expect(await screen.findByRole('status')).toBeInTheDocument();
    expect(await screen.findByRole('contentinfo')).toBeInTheDocument();
  });

  it('閲覧数1・ブックマーク数0のとき', async () => {
    render(<App illustId={mockedIllustIds['閲覧数1・ブックマーク数0']} />);

    expect(await screen.findByRole('status')).toBeInTheDocument();
    expect(await screen.findByRole('contentinfo')).toBeInTheDocument();
  });

  it('閲覧数1・ブックマーク数1のとき', async () => {
    render(<App illustId={mockedIllustIds['閲覧数1・ブックマーク数1']} />);

    expect(await screen.findByRole('status')).toBeInTheDocument();
    expect(await screen.findByRole('contentinfo')).toBeInTheDocument();
  });
});
