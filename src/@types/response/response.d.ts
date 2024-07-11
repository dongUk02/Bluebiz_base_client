export declare type booleanType = 'Y' | 'N';

interface defaultRes {
  "custCd": string,
  "insertDt"?: string,
  "insertId"?: string,
  "insertIp"?: string,
  "updateDt"?: string,
  "updateId"?: string,
  "updateIp"?: string,
}

export interface IMenuInfoRes extends defaultRes {
  "pageMoCd": string,
  "pageCd": string,
  "factCd": string,
  "menuSeq": number,
  "menuIcon"?: IconLoaderProps
  "pageInfo": IPageInfoRes,
}

export interface ICompInfoRes extends defaultRes{
  "compCd": string,
  "compNo": string,
  "compNm": string,
  "compType": string,
  "compGroup"?: string,
  "compIdnum"?: string,
  "compCeo"?: string,
  "compCond"?: string,
  "compKind"?: string,
  "compTel"?: string,
  "compFax"?: string,
  "compAddr"?: string,
  "compAdmin"?: string,
  "compMobile"?: string,
  "compEmail"?: string,
  "compBank"?: string,
  "compAcct"?: string,
  "compHold"?: string,
  "compYn": booleanType,
  "compNt"?: string,
}

export interface IPageInfoRes {
  "pageCd": string,
  "pageNm": string,
  "pagePath": string,
}
