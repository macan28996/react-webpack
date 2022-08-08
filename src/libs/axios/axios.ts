import { createAxios } from "@src/libs/axios/create_axios";
import { AxiosInstance } from "axios";

export const axiosWithToken: AxiosInstance = createAxios();

export const axiosWithoutToken: AxiosInstance = createAxios({ withAuthToken: false });
