
import BizGrid from "@components/grid/BizGrid";
import { fetchCompanyInfo } from "@service/api/base/company/getApi";
import { useState } from "react"
import { IBizGridProps } from "src/@types/grid/BizGrid";
import { ICompInfoRes } from "src/@types/response/response";

const CompanyPage = () => {
  const [agGridOptions, _setAgGridOptions] = useState<IBizGridProps<ICompInfoRes>>({
    columnDefs: [
      { headerName: '거래처코드', field: 'compCd' },
      { headerName: '거래처코드', field: 'compNo' },
      { headerName: '거래처명', field: 'compNm' },
      { headerName: '거래타입', field: 'compType' },
      { headerName: '거래처분류', field: 'compGroup' },
      { headerName: '사업자등록번호', field: 'compIdnum' },
      { headerName: '거래처타입', field: 'compCeo' },
      { headerName: '거래처타입', field: 'compKind' },
      { headerName: '거래처타입', field: 'compTel' },
      { headerName: '거래처타입', field: 'compFax' },
      { headerName: '거래처타입', field: 'compAddr' },
      { headerName: '거래처타입', field: 'compAdmin' },
      { headerName: '거래처타입', field: 'compMobile' },
      { headerName: '거래처타입', field: 'compEmail' },
      { headerName: '거래처타입', field: 'compBank' },
      { headerName: '거래처타입', field: 'compAcct' },
      { headerName: '거래처타입', field: 'compHold' },
      { headerName: '거래처타입', field: 'compYn' },
      { headerName: '거래처타입', field: 'compNt' },
    ],
    fetchFn: fetchCompanyInfo,
  });

  return (
    <div style={{ height: '100%' }}>
      <BizGrid<ICompInfoRes> {...agGridOptions} />
    </div>
  )
}

export default CompanyPage