/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  overrides: [
    // なぜかJSオブジェクト扱いされるため、パーサーをJSONに変更しておく
    {
      files: '.github/renovate.json5',
      options: {
        parser: 'json',
      },
    },
  ],
};
