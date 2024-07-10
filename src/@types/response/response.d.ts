export type IconLoaderProps = keyof typeof import('@ant-design/icons');

export interface MenuResponse {
  "insertDt": string,
  "insertId": string,
  "insertIp"?: string,
  "updateDt": string,
  "updateId"?: string,
  "updateIp"?: string,
  "pageMoCd": string,
  "pageCd": string,
  "custCd": string,
  "factCd": string,
  "menuSeq": number,
  "menuIcon"?: IconLoaderProps
  "pageInfo": PageResponse,
}

export interface PageResponse {
  "pageCd": string,
  "pageNm": string,
  "pagePath": string,
}
