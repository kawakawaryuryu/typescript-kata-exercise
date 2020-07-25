type PickUndefined<Obj> = {[K in keyof Obj]-?: undefined extends Obj[K] ? K : never}[keyof Obj]
type MapToNever<Obj> = {[K in keyof Obj]: never}
type OptionalKeys<Obj> = PickUndefined<MapToNever<Obj>>

// 使用例
type Data = {
  foo: string;
  bar?: number;
  baz?: boolean;

  hoge: undefined;
  piyo?: undefined;
};

// "bar" | "baz" | "piyo"
type T = OptionalKeys<Data>;

// 成功例
const bar: T = 'bar'
const baz: T = 'baz'
const piyo: T = 'piyo'

// 失敗例
const hoge: T = 'hoge'
