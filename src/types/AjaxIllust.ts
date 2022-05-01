import { z } from 'zod';

// アプリから参照するプロパティのみ定義
export const AjaxIllustResponseSchema = z.object({
  error: z.literal(false),
  message: z.string(),
  body: z.object({
    viewCount: z.number().nonnegative().int(),
    bookmarkCount: z.number().nonnegative().int(),

    // ISO8601 (UTC+オフセットは必ず `+00:00` で来る)
    // パースすると重たくなるので文字列かどうかだけを宣言
    createDate: z.string(),
  }),
});

export type AjaxIllustResponse = z.infer<typeof AjaxIllustResponseSchema>;

export const AjaxIllustErrorResponseSchema = z.object({
  error: z.literal(true),
  message: z.string().nonempty(),
});

export type AjaxIllustErrorResponse = z.infer<typeof AjaxIllustErrorResponseSchema>;
