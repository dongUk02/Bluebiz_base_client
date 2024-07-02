import { BASE_URL } from '../../utils/constants';
import HttpClient from './HttpClient';

const apiClient = new HttpClient(BASE_URL);

export default apiClient;