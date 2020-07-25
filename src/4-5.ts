type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
type Spread<T, K extends keyof T> = K extends keyof T ? PartiallyPartial<T, Exclude<keyof T, K>> : never
type AtLeastOne<T> = Spread<T, keyof T>

// 使用例
interface Options {
  foo: number;
  bar: string;
  baz: boolean;
}
function test(options: AtLeastOne<Options>) {
  const { foo, bar, baz } = options;
  // 省略
}
test({
  foo: 123,
  bar: "bar"
});
test({
  baz: true
});

// エラー例
test({});
