import apiClient from "@service/common/apiClient";
import { IMenuInfoRes } from "src/@types/response/response";

export const fetchMenu = async () => {
  try {
    const response = await apiClient.get<IMenuInfoRes[]>('/menu/info/list?custCd=1000&factCd=1000');
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return [];
};