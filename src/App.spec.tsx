import { render, screen } from '@testing-library/react';

import { App } from './App';
import { mockedIllustIds } from './mocks/db';

describe('<App />', () => {
  it.todo('存在しない/削除されたとき');

  it('閲覧数0・ブックマーク数0のとき', async () => {
    render(<App illustId={mockedIllustIds['閲覧数0・ブックマーク数0']} />);

    expect(await screen.findByTestId('loading')).toBeInTheDocument();
    expect(await screen.findByTestId('loaded')).toBeInTheDocument();
  });

  it('閲覧数1・ブックマーク数0のとき', async () => {
    render(<App illustId={mockedIllustIds['閲覧数1・ブックマーク数0']} />);

    expect(await screen.findByTestId('loading')).toBeInTheDocument();
    expect(await screen.findByTestId('loaded')).toBeInTheDocument();
  });

  it('閲覧数1・ブックマーク数1のとき', async () => {
    render(<App illustId={mockedIllustIds['閲覧数1・ブックマーク数1']} />);

    expect(await screen.findByTestId('loading')).toBeInTheDocument();
    expect(await screen.findByTestId('loaded')).toBeInTheDocument();
  });
});
