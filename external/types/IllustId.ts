import { z } from 'zod';

export type IllustId = string & { __BRAND__: 'IllustId' };

export const IllustIdSchema = z.custom<IllustId>(
  (given) => (
    z
      .string()
      .min(1)
      .regex(/^\d+$/)
      .safeParse(given).success
  ),
  { message: 'Invalid illust id' },
);
