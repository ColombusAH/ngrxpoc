export type Filter<T> = {
  [P in keyof T]?: T[P];
};
