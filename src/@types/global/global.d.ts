export type IconLoaderProps = keyof typeof import('@ant-design/icons');

type WithDollarPrefix<T> = {
  [K in keyof T as `$${K & string}`]: T[K]
};