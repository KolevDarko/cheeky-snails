import { useState, useContext, createContext } from "react";

const AuthProviderContext = createContext();

export function useAuthProvider() {
  return useContext(AuthProviderContext);
}

export default function AuthProvider({ children }) {
  const [signer, setSigner] = useState();
  const [provider, setProvider] = useState();
  const [networkId, setNetworkId] = useState(0);

  const contextState = {
    signer,
    setSigner,
    networkId,
    setNetworkId,
    provider,
    setProvider,
  };

  return (
    <AuthProviderContext.Provider value={contextState}>
      {children}
    </AuthProviderContext.Provider>
  );
}
