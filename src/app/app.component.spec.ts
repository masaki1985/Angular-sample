import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

//テスト全体の定義
describe('AppComponent', () => {
  //テスト環境で使用するモジュールを設定
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        //テスト対象クラス
        AppComponent
      ],
    }).compileComponents();
  }));

  //単体テストの定義(タイトルはshould create the app)
  it('should create the app', async(() => {
    //デバッグ用クラスComponentFixture<AppComponent>を作成
    const fixture = TestBed.createComponent(AppComponent);
    //debugElementでコンポーネントのルート要素を取得
    //componentInstanceでコンポーネントのインスタンス取得
    const app = fixture.debugElement.componentInstance;
    //expect()でインスタンスの正常値(true)の評価
    expect(app).toBeTruthy();
  }));

  //単体テストの定義(タイトルはshould have as title 'app works!')
  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //コンポーネントのインスタンスからプロパティtitleの値を取得
    //titleの値と正常値('app works!)の評価
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    //HTMLのロード完了確認
    fixture.detectChanges();
    //HTMLのルート要素取得
    const compiled = fixture.debugElement.nativeElement;
    //h1要素内のテキスト取得
    //取得テキストと正常値('app works!')の評価
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
