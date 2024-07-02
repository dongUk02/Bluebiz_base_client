// import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { BluebizGridProps } from '../../@types/grid/BluebizGird'

export const BlueBizGrid = (props: BluebizGridProps) => {
  return (
    // <Flex>
    <>
      <div
        style={{ height: '4%', width: '100%', textAlign: 'center', fontSize: '16px',padding:4, backgroundColor: '#fff'}}
      >
        검색 및 기타 버튼 영역
      </div>
      <div
        className={`ag-theme-${props.dummy}`}
        style={{ height: '96%', width: '100%' }}
      >
        <AgGridReact
          rowData={props.rowData}
          columnDefs={props.columnDefs}
        />
      </div>
    </>
    // </Flex>
  )
}