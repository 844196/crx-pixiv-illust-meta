import { AjaxIllustErrorResponseSchema, AjaxIllustResponse, AjaxIllustResponseSchema } from '../types/AjaxIllust';
import { IllustId } from '../types/IllustId';

/**
 * @throws {Error}
 */
export async function fetchAjaxIllust(illustId: IllustId): Promise<AjaxIllustResponse> {
  const res = await fetch(`https://www.pixiv.net/ajax/illust/${illustId}`, { credentials: 'include' });
  if (res.ok) {
    return AjaxIllustResponseSchema.parse(await res.json().catch(() => {}));
  }

  let message = 'Something went wrong.';

  const parseResult = AjaxIllustErrorResponseSchema.safeParse(await res.json().catch(() => {}));
  if (parseResult.success) {
    message = parseResult.data.message;
  }

  throw new Error(message);
}
