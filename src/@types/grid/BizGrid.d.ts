import { AgGridReactProps } from "ag-grid-react";

declare const dummyTypeArray: readonly ["quartz", "balham", "alpine", "material"];
declare type DummyType = typeof dummyTypeArray[number];

export interface IBizGridProps<T> extends Omit<AgGridReactProps, "rowData" | "defaultColDef"> {
  dummy?: DummyType;
  fetchFn?: () => Promise<T[]>;
  rowData?: T[];
}
