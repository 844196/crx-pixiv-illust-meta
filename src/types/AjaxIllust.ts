// アプリから参照するプロパティのみ定義
export type AjaxIllustResponse = {
  error: false,
  message: '',
  body: {
    bookmarkCount: number,
    viewCount: number,
    createDate: string, // ISO8601 (UTC+オフセットは必ず `+00:00` で来る)
  },
};

export type AjaxIllustErrorResponse = {
  error: true,
  message: string,
  body: [],
};
