function test(options) {
    var foo = options.foo, bar = options.bar, baz = options.baz;
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
