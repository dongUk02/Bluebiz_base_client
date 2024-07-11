import apiClient from "@service/common/apiClient";
import { ICompInfoRes } from "src/@types/response/response";

export const fetchCompanyInfo = async () => {
  try {
    const response = await apiClient.get<ICompInfoRes[]>('/comp/info/list?custCd=1000');
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return [];
};
