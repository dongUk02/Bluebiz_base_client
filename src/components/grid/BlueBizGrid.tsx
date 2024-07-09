// import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { BluebizGridProps } from './BluebizGird'
import { Flex } from 'antd'

export const BlueBizGrid = (props: BluebizGridProps) => {
  return (
    <>
      <Flex
        style={{ height: '36px', width: '100%', padding: 3, backgroundColor: '#fff' }}
      >
        'd'
      </Flex>
      <div
        className={`ag-theme-${props.dummy}`}
        style={{ height: 'calc(100% - 36px)', width: '100%' }}
      >
        <AgGridReact
          rowData={props.rowData}
          columnDefs={props.columnDefs}
        />
      </div>
    </>
  )
}