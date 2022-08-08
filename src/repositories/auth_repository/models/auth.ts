export interface IProfile {
  id: string;
  firstName: string;
  lastName: string;
}

export interface IAuthProfile {
  profile?: IProfile;
  credential?: ICredential;
}

export interface ICredential {
  accessToken: string;
  refreshToken?: string;
}

export interface IAuthLoginParams {
  token: string;
}

export interface IAuthLoginResponse {
  data: ICredential;
}

export interface IAuthGetProfileResponse {
  data: {
    profile: IProfile;
  };
}
