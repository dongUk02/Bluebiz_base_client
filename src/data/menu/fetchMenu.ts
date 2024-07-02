
import apiClient from "../../service/common/apiClient";
import { MenuObject } from './../../utils/common.d';


export const fetchMenu = async () => {
  try {
    const response = await apiClient.get<MenuObject[]>('/menu');
    return response.data 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return [];
};