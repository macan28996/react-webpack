import React, { createContext, useContext } from "react";

import { IAuthProfile } from "@src/repositories/auth_repository/models/auth";

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<IAuthProfile>({} as IAuthProfile);

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const value: IAuthProfile = {};

  return <AuthContext.Provider value={value ?? {}}>{children}</AuthContext.Provider>;
};
