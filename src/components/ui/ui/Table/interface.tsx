export interface HeaderInterface<T> {
  key?: keyof T | React.ReactNode;
  name: string;
  width?: number;
  custom?: (item: T) => React.ReactNode;
  className?: string;
}

export interface TableInterface<T> {
  headers: HeaderInterface<T>[];
  no: boolean;
  action: (item: T) => React.ReactNode;
  actionHeadText: string;
  data: T[];
  increment?: number;
  loading: false;
}
