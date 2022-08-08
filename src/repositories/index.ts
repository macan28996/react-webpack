import { axiosWithoutToken, axiosWithToken } from "@src/libs/axios";

import { AuthRepository } from "@src/repositories/auth_repository";
export const authRepository = new AuthRepository(axiosWithToken, axiosWithoutToken);
