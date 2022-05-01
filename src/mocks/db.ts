import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  illust: {
    id: primaryKey(String),
    createDate: String,
    viewCount: Number,
    bookmarkCount: Number,
  },
});

export const mockedIllustIds = {
  '存在しない・削除された': '0',
  '閲覧数0・ブックマーク数0': '123',
  '閲覧数1・ブックマーク数0': '456',
  '閲覧数1・ブックマーク数1': '789',
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
