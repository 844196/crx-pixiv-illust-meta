import { DATA_NAME, mount } from './main';

describe('mount()', () => {
  describe('正しいa要素を渡された時', () => {
    const root = document.createElement('div');
    const div = document.createElement('div');
    root.appendChild(div);

    const a = document.createElement('a');
    div.appendChild(a);
    a.href = '/artworks/123';

    it('マウントに成功すること', () => {
      mount(a);
      expect(a).toHaveAttribute(DATA_NAME, 'processed');
    });
  });

  describe('不正なa要素を渡された時', () => {
    const root = document.createElement('div');
    const div = document.createElement('div');
    root.appendChild(div);

    const a = document.createElement('a');
    div.appendChild(a);
    a.href = '/artworks/'; // イラストIDがない

    it('マウントに失敗し、エラーを送出すること', () => {
      expect(() => mount(a)).toThrowError();
      expect(a).toHaveAttribute(DATA_NAME, 'mount-failure');
    });
  });
});
