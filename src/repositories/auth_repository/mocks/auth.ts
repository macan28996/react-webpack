import {
  IAuthGetProfileResponse,
  IAuthLoginResponse,
} from "@src/repositories/auth_repository/models/auth";

export const authLoginResponseMock: IAuthLoginResponse = {
  data: {
    accessToken: "access_token",
    refreshToken: "refresh_token",
  },
};

export const authGetProfileResponseMock: IAuthGetProfileResponse = {
  data: {
    profile: {
      id: "1",
      firstName: "admin",
      lastName: "admin",
    },
  },
};
