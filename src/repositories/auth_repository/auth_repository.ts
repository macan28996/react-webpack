/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  IAuthGetProfileResponse,
  IAuthLoginParams,
  IAuthLoginResponse,
} from "@src/repositories/auth_repository/models/auth";
import {
  authLoginResponseMock,
  authGetProfileResponseMock,
} from "@src/repositories/auth_repository/mocks/auth";
import { AxiosInstance } from "axios";

export class AuthRepository {
  private axiosWithoutToken: AxiosInstance;
  private axiosWithToken: AxiosInstance;

  constructor(axiosWithToken: AxiosInstance, axiosWithoutToken: AxiosInstance) {
    this.axiosWithToken = axiosWithToken;
    this.axiosWithoutToken = axiosWithoutToken;
  }

  async login(_params: IAuthLoginParams): Promise<IAuthLoginResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(authLoginResponseMock);
      }, 1000);
    });
  }

  async getProfile(): Promise<IAuthGetProfileResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(authGetProfileResponseMock);
      }, 1000);
    });
  }
}
