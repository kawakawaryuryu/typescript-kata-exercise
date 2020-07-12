function mapFromArray<K extends keyof V, V>(arr: V[], key: K): Map<V[K], V> {
  const result = new Map();
  for (const obj of arr) {
    result.set(obj[key], obj);
  }
  return result;
}

// 使用例
const data = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Mary Sue" },
  { id: 100, name: "Taro Yamada" }
];
type dataType = {id: number, name: string}
const dataMap = mapFromArray<keyof dataType, dataType>(data, "id");
/*
dataMapは
Map {
  1 => { id: 1, name: 'John Smith' },
  2 => { id: 2, name: 'Mary Sue' },
  100 => { id: 100, name: 'Taro Yamada' }
}
というMapになる
*/

// エラー例
mapFromArray<keyof dataType, dataType>(data, "age");
