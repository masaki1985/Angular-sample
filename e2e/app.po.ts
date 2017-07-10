import { browser, by, element } from 'protractor';

//ページオブジェクトのクラス宣言
export class SamplePage {
  //ページをブラウザにダウンロードする
  navigateTo() {
    return browser.get('/');
  }

  //h1要素内の文字列を取得する
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
