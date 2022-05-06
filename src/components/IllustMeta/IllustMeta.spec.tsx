import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

import { IllustIdSchema } from '@external';

import * as hook from '../../hooks/useIllustMeta';

import { IllustMeta } from './IllustMeta';

describe('<IllustMeta />', () => {
  const NOW = new Date('2022-05-02T04:21:00.000+09:00');

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(NOW);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('閲覧数・ブックマーク数ともに1以上のとき', () => {
    it('ブックマーク率も表示されること', () => {
      const ILLUST_ID = IllustIdSchema.parse('64687019');
      const spyHook = vi
        .spyOn(hook, 'useIllustMeta')
        .mockImplementation(() => ({
          data: {
            viewCount: 1559,
            bookmarkCount: 134,
            postedAt: dayjs('2017-08-29T15:23:55.000Z'),
          },
        }));

      render(<IllustMeta illustId={ILLUST_ID} />);

      expect(spyHook).toBeCalledWith(ILLUST_ID);

      expect(screen.getByTestId('absoluteTime')).toHaveTextContent(
        '2017年8月30日 00:23'
      );
      expect(screen.getByTestId('relativeTime')).toHaveTextContent('5年前');
      expect(screen.getByTestId('viewCount')).toHaveTextContent('1,559');
      expect(screen.getByTestId('bookmarkCount')).toHaveTextContent('134');
      expect(screen.getByTestId('bookmarkRate')).toBeInTheDocument();
    });
  });

  describe('閲覧数1以上・ブックマーク数0のとき', () => {
    it('ブックマーク率は表示されないこと', () => {
      const ILLUST_ID = IllustIdSchema.parse('43514107');
      const spyHook = vi
        .spyOn(hook, 'useIllustMeta')
        .mockImplementation(() => ({
          data: {
            viewCount: 320,
            bookmarkCount: 0,
            postedAt: dayjs('2014-05-15T09:23:34.000Z'),
          },
        }));

      render(<IllustMeta illustId={ILLUST_ID} />);

      expect(spyHook).toBeCalledWith(ILLUST_ID);

      expect(screen.getByTestId('absoluteTime')).toHaveTextContent(
        '2014年5月15日 18:23'
      );
      expect(screen.getByTestId('relativeTime')).toHaveTextContent('8年前');
      expect(screen.getByTestId('viewCount')).toHaveTextContent('320');
      expect(screen.getByTestId('bookmarkCount')).toHaveTextContent('0');
      expect(screen.queryByTestId('bookmarkRate')).not.toBeInTheDocument();
    });
  });

  describe('閲覧数・ブックマーク数ともに0のとき', () => {
    it('ブックマーク率は表示されないこと', () => {
      const ILLUST_ID = IllustIdSchema.parse('90730860835');
      const spyHook = vi
        .spyOn(hook, 'useIllustMeta')
        .mockImplementation(() => ({
          data: {
            viewCount: 0,
            bookmarkCount: 0,
            postedAt: dayjs('2022-04-03T14:11:55.000Z'),
          },
        }));

      render(<IllustMeta illustId={ILLUST_ID} />);

      expect(spyHook).toBeCalledWith(ILLUST_ID);

      expect(screen.getByTestId('absoluteTime')).toHaveTextContent(
        '2022年4月3日 23:11'
      );
      expect(screen.getByTestId('relativeTime')).toHaveTextContent('1ヶ月前');
      expect(screen.getByTestId('viewCount')).toHaveTextContent('0');
      expect(screen.getByTestId('bookmarkCount')).toHaveTextContent('0');
      expect(screen.queryByTestId('bookmarkRate')).not.toBeInTheDocument();
    });
  });
});
