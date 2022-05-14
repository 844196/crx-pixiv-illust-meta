import { factory, primaryKey } from '@mswjs/data';

import { IllustIdSchema } from '../api';

export const db = factory({
  illust: {
    id: primaryKey(String),
    createDate: String,
    viewCount: Number,
    bookmarkCount: Number,
  },
});

export const mockedIllustIds = {
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  '存在しない・削除された': IllustIdSchema.parse('0')!,
  '閲覧数0・ブックマーク数0': IllustIdSchema.parse('123')!,
  '閲覧数1・ブックマーク数0': IllustIdSchema.parse('456')!,
  '閲覧数1・ブックマーク数1': IllustIdSchema.parse('789')!,
} as const;

db.illust.create({
  id: mockedIllustIds['閲覧数0・ブックマーク数0'],
  createDate: '2021-10-04T12:47:16+00:00',
  viewCount: 0,
  bookmarkCount: 0,
});

db.illust.create({
  id: mockedIllustIds['閲覧数1・ブックマーク数0'],
  createDate: '2021-10-04T12:47:16+00:00',
  viewCount: 1,
  bookmarkCount: 0,
});

db.illust.create({
  id: mockedIllustIds['閲覧数1・ブックマーク数1'],
  createDate: '2021-10-04T12:47:16+00:00',
  viewCount: 1,
  bookmarkCount: 1,
});
