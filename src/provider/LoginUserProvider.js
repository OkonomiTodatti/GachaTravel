import React, { createContext, useContext, useState } from 'react';

export const LoginUserContext = createContext({});

export const LoginUserProvider = (props) => {
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
