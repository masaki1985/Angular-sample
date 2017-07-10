import { SamplePage } from './app.po';

describe('sample App', () => {
  let page: SamplePage;

  beforeEach(() => {
    //ページオブジェクトの生成
    page = new SamplePage();
  });

  it('should display welcome message', () => {
    //テスト対象ページを開く
    page.navigateTo();
    //ページに表示された文字と正常値(app works!)の評価
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
