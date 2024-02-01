type TBox<T> = {
  x: T;
  map: <U>(f: (value: T) => U) => TBox<U>;
  fold: () => T;
};

export const Box = <T>(x: T): TBox<T> => ({
  x,
  map: (f) => Box(f(x)),
  fold: () => x,
});
