import { z } from 'zod';

export type IllustId = string & { __BRAND__: 'IllustId' };

export const IllustIdSchema = z.custom<IllustId>((value) => z.string().min(1).safeParse(value).success);
