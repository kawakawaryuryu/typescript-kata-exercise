function getFoo<T extends object>(obj: T): T extends {foo: infer E} ? E : unknown {
  return (obj as any).foo;
}

// 使用例
// numはnumber型
const num = getFoo<{foo: number}>({
  foo: 123
});
// strはstring型
const str = getFoo<{foo: string, bar: number}>({
  foo: "hoge",
  bar: 0
});
// unkはunknown型
const unk = getFoo<{hoge: boolean}>({
  hoge: true
});

// エラー例
getFoo<number>(123);
getFoo<null>(null);
