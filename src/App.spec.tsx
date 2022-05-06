import { render, screen } from '@testing-library/react';

import { mockedIllustIds } from '@mock/db';

import { App } from './App';

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
      expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();

      const alert = await screen.findByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent('該当作品は削除されたか、存在しない作品IDです。');
      expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
    });
  });

  it('存在するイラスト', async () => {
    render(<App illustId={mockedIllustIds['閲覧数1・ブックマーク数1']} />);

    expect(await screen.findByRole('status')).toBeInTheDocument();
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();

    expect(await screen.findByRole('contentinfo')).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
