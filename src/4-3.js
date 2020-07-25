var EventDischarger = /** @class */ (function () {
    function EventDischarger() {
    }
    EventDischarger.prototype.emit = function (eventName, payload) {
        // 省略
    };
    return EventDischarger;
}());
// 使用例
var ed = new EventDischarger();
ed.emit("start", {
    user: "user1"
});
ed.emit("stop", {
    user: "user1",
    after: 3
});
ed.emit("end", {});
// エラー例
ed.emit("stop", {
    user: "user1"
});
