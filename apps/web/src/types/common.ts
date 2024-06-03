export type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T
  ? Required<Pick<T, K>> & Omit<T, K>
  : never;

// 全てのプロパティを持てなくする汎用型
export type RejectAll<T> = { [P in keyof T]?: never };

// `定義されているプロパティの中でどれか１つは必須`を表現する汎用型
export type OnlyOneOf<T> = {
  [P in keyof T]: RejectAll<Omit<T, P>> & Required<Pick<T, P>>;
}[keyof T];