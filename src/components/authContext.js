import React, { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { Auth, Hub } from 'aws-amplify';

const UserContext = createContext({});

export default function AuthContext({children}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    Hub.listen('auth', () => {
      checkUser();
    });
  }, []);

  async function checkUser() {
    try{
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
      setUser(user);
      }
    }
    catch(err) {
      setUser(null);
    }
  };

  return ( 
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// export as hook to use in other components
export const useUser = () => useContext(UserContext);