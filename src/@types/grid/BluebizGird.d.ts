import { GridOptions as GridOptionsOriginal } from 'ag-grid-community';

declare const dummyTypeArray: readonly ["quartz", "balham", "alpine", "material"];
declare type DummyType = typeof dummyTypeArray[number];

declare declare type BluebizGridProps = GridOptionsOriginal & {
  dummy?: DummyType;
}

export { BluebizGridProps };