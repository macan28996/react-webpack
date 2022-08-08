import { authRepository } from "@src/repositories";
import { IAuthGetProfileResponse } from "@src/repositories/auth_repository/models/auth";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { authQueryKey } from "@src/repositories/auth_repository/query_key/auth_query_key";

interface IUseFetchUserProps {
  onSuccess?: (data: IAuthGetProfileResponse) => void;
  onError?: (error: AxiosError) => void;
}

export function useFetchUser(props: IUseFetchUserProps) {
  const { onSuccess = () => {}, onError = () => {} } = props;

  return useQuery(authQueryKey.detail(), () => authRepository.getProfile(), {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error: AxiosError) => {
      onError(error);
    },
  });
}
