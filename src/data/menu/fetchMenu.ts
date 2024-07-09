import apiClient from "../../service/common/apiClient";
import { MenuResponse } from './../../utils/common.d';


export const fetchMenu = async () => {
  try {
    const response = await apiClient.get<MenuResponse[]>('/menu/info/list?custCd=1000&factCd=1000');
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return [];
};