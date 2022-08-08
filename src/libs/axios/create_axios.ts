import axios, { AxiosInstance } from "axios";
import { storageService } from "@src/services";
import { KeyStorageCredential } from "@src/services/storage_service/key_storage";
import { ICredential } from "@src/repositories/auth_repository/models/auth";
import { pathname } from "@src/config/pathname";

interface IConfig {
  withAuthToken: boolean;
}

const defaultConfig: IConfig = {
  withAuthToken: true,
};

export function createAxios(config?: Partial<IConfig>): AxiosInstance {
  const configValues: IConfig = config ? { ...defaultConfig, ...config } : defaultConfig;

  const headers: { [key: string]: string } = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json;charset=utf-8",
  };

  const baseURL = `https://some-domain.com/api/`;

  const client = axios.create({
    baseURL,
    headers,
  });

  if (configValues.withAuthToken) {
    client.interceptors.request.use((requestConfig) => {
      const credential = storageService.get(KeyStorageCredential) as ICredential;

      if (!credential.accessToken || !credential.refreshToken) {
        window.location.href = pathname.login();
        return requestConfig;
      }
      if (requestConfig.headers) {
        requestConfig.headers.Authorization = `Bearer ${credential.accessToken}`;
      }
      return requestConfig;
    });
  }

  return client;
}
