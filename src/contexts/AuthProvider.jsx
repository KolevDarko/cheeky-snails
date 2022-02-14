import { useState, useContext, createContext } from "react";

const AuthProviderContext = createContext();

export function useAuthProvider() {
  return useContext(AuthProviderContext);
}

export default function AuthProvider({ children }) {
  const [signer, setSigner] = useState(false);

  const contextState = { signer, setSigner };

  return (
    <AuthProviderContext.Provider value={contextState}>
      {children}
    </AuthProviderContext.Provider>
  );
}
