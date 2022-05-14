import { IllustIdSchema } from './IllustId';

describe('IllustIdSchema', () => {
  it('文字列型でなければならない', () => {
    expect(() => IllustIdSchema.parse(123)).toThrowError();

    expect(() => IllustIdSchema.parse('123')).not.toThrowError();
  });

  it('1文字以上でなければならない', () => {
    expect(() => IllustIdSchema.parse('')).toThrowError();

    expect(() => IllustIdSchema.parse('1')).not.toThrowError();
  });

  it('すべて数字でなければならない', () => {
    expect(() => IllustIdSchema.parse('abc')).toThrowError();
    expect(() => IllustIdSchema.parse('1abc')).toThrowError();
    expect(() => IllustIdSchema.parse('1abc2')).toThrowError();

    expect(() => IllustIdSchema.parse('123')).not.toThrowError();
  });
});
