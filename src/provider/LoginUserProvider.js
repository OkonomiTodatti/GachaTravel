import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
export const LoginUserContext = createContext({});

export const LoginUserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState(null);
  const [gachaFlag, setGachaFlag] = useState(false);
  return (
    <>
      <LoginUserContext.Provider value={{ loginUser, setLoginUser, gachaFlag, setGachaFlag }}>
        {children}
      </LoginUserContext.Provider>
    </>
  );
};

export const useLoginUser = () => useContext(LoginUserContext);
