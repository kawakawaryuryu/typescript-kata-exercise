interface Option {
  capture?: boolean,
  once?: boolean,
  passive?: boolean
}
declare function addEventListener(arg1: string, arg2: () => void, arg3?: boolean | Option): void

// 使用例
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false
});

// エラー例
addEventListener("foobar", () => {}, "string");
addEventListener("hoge", () => {}, {
  capture: true,
  once: false,
  excess: true
});
