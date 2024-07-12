"use strict";

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import FlexPanel from '@components/flex/FlexPanel';
import { Button, Flex } from 'antd'
import { BizGridSearchBar } from './BizGrid.topBar';
import { IBizGridProps } from 'src/@types/grid/BizGrid';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { useEffect, useRef, useState } from 'react';
/** 
 * @params 
 * fetchFn : rowData를 받아오는 속성 
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-07-11        이동욱           최초 생성
 */

const BizGrid = <T,>(props: IBizGridProps<T>) => {
  const { fetchFn, rowData: staticRowData, ...rest } = props;
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<T[] | undefined>();

  const defaultColDef: AgGridReactProps<T>['defaultColDef'] = {
    // filter: "agMultiColumnFilter",
    floatingFilter: true,
    filter: 'agTextColumnFilter',
    // suppressColumnsToolPanel: true,
  };


  const getFecthData = async () => {
    if (fetchFn) {
      const fecthData = await fetchFn();
      setRowData(fecthData);
    }
  }

  const useRowData = (staticRowData: T[] | undefined) => {
    staticRowData ? setRowData(staticRowData) : getFecthData();
  }

  useEffect(() => {
    useRowData(staticRowData);
  }, [staticRowData])

  /**
   * TODO : 나중에 검색 기능 추가할때 참고
   */
  // const onFilterTextBoxChanged = () => {
  //   gridRef.current!.api.setGridOption(
  //     "quickFilterText",
  //     (document.getElementById("filter-text-box") as HTMLInputElement).value,
  //   )
  // }

  return (
    <>
      <BizGridSearchBar />
      {/* <input
        type="text"
        id="filter-text-box"
        placeholder="Filter..."
        onInput={onFilterTextBoxChanged}
      /> */}
      <FlexPanel vertical height={'calc(100% - 56px)'} padding='4px 8px 0px 8px'>
        <Flex justify='space-between' gap={4} style={{ height: '32px', width: '100%' }}>
          <Flex gap={4}>
            {' '}
          </Flex>
          <Flex gap={4}>
            <Button icon={<PlusOutlined />} type='primary' >등록</Button>
            <Button icon={<MinusOutlined />} type='primary' danger>삭제</Button>
          </Flex>
        </Flex>
        <div
          className={`ag-theme-${rest.dummy || 'balham'}`}
          style={{ height: '100%', width: '100%', padding: 0 }}
        >
          <AgGridReact<T>
            ref={gridRef}
            rowData={rowData || []}
            defaultColDef={defaultColDef}
            autoSizeStrategy={{ type: 'fitCellContents' }}
            {...rest}
          />
        </div>
      </FlexPanel>
    </>
  )
}


export default BizGrid;