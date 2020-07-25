type KeysOfType<Obj, Val> = {[K in keyof Obj]-?: Obj[K] extends Val ? K : never}[keyof Obj]

// 使用例
type Data = {
  foo: string;
  bar: number;
  baz: boolean;

  hoge?: string;
  fuga: string;
  piyo?: number;
};

// "foo" | "fuga"
// ※ "hoge" は string | undefiendなので含まない
type StringKeys = KeysOfType<Data, string>;

const foo: StringKeys = 'foo'
const hogeVal: StringKeys = 'hoge'

function useNumber<Obj>(obj: Obj, key: KeysOfType<Obj, number>) {
  // ヒント: ここはanyを使わざるを得ない
  const num: number = (obj as any)[key];
  return num * 10;
}

declare const data: Data;

// これはOK
useNumber(data, "bar");
// これは型エラー
useNumber(data, "baz");
