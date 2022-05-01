import { render, screen } from '@testing-library/react';

import { App } from './App';
import { mockedIllustIds } from './mocks/db';

describe('<App />', () => {
  it('存在しない/削除されたとき', async () => {
    render(<App illustId={mockedIllustIds['存在しない・削除された']} />);

    expect(await screen.findByRole('status')).toBeInTheDocument();
    expect(await screen.findByRole('alert')).toBeInTheDocument();
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
