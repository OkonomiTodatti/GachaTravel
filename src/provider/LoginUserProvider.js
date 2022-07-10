import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
export const LoginUserContext = createContext({});

export const LoginUserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState(null);
  return (
    <>
      <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>
    </>
  );
};

export const useLoginUser = () => useContext(LoginUserContext);
