// 使用例

// 元のデータ
interface Data {
  foo: number;
  bar: string;
  baz: string;
}

type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>

/*
 * T1は { foo?: number; bar?: string; baz: string } 型
 */
type T1 = PartiallyPartial<Data, "foo" | "bar">;

// 成功例
const ex1: T1 = { baz: 'hoge' }
const ex2: T1 = { foo: 1, bar: 'bar', baz: 'baz' }

// 失敗例
const ex3: T1 = {foo: 1, bar: 'bar'}
const ex4: T1 = {}
