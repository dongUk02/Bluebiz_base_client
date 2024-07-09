// HttpClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.axiosInstance.interceptors.request.use(
      this.handleRequest,
      this.handleError
    );
  };

  private initializeResponseInterceptor = () => {
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  // 헤더 추가
  private handleRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    return config;
  };

  // 성공 처리
  private handleResponse = <T>(response: AxiosResponse): AxiosResponse<T> | Promise<AxiosResponse<T>> => {
    return response.data;
  };

  // 에러 처리
  private handleError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };

  public get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return this.axiosInstance.get<T>(url, config);
  };

  public post = <T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return this.axiosInstance.post<T>(url, data, config);
  };

  public put = <T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return this.axiosInstance.put<T>(url, data, config);
  };

  public delete = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return this.axiosInstance.delete<T>(url, config);
  };
}

export default HttpClient;
