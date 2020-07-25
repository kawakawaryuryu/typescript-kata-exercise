var foo = 'foo';
var hogeVal = 'hoge';
function useNumber(obj, key) {
    // ヒント: ここはanyを使わざるを得ない
    var num = obj[key];
    return num * 10;
}
// これはOK
useNumber(data, "bar");
// これは型エラー
useNumber(data, "baz");
