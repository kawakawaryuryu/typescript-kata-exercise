interface EventPayloads {
  start: {
    user: string;
  };
  stop: {
    user: string;
    after: number;
  };
  end: {};
}

type Spread<E, Ev, EvOrigin> = Ev extends keyof E ? EvOrigin[] extends Ev[] ? E[Ev] : never : never

class EventDischarger<E> {
  emit<Ev extends keyof E>(eventName: Ev, payload: Spread<E, Ev, Ev>) {
    // 省略
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit<'start'>("start", {
  user: "user1"
});
ed.emit<'stop'>("stop", {
  user: "user1",
  after: 3
});
ed.emit<'end'>("end", {});

// エラー例
ed.emit<"start" | "stop">("stop", {
  user: "user1"
});
