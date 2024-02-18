import { createContext, useContext, useState } from "react";

type RenderAuthProviderProps = {
  children: JSX.Element | JSX.Element[];
};

// Definir que info tendremos
export type AuthState = {
  user: string | null;
};

// Indicamos a React que info expone el Context
type RenderAuthContextType = {
  auth: AuthState;
  login: (authState: AuthState) => void;
  logout: () => void;
};

// Creamos el contexto
const AuthContext = createContext<RenderAuthContextType | null>(null);

// Estado inicial
const initialAuth: AuthState = {
  user: null,
};

// Componente proveedor del estado
const AuthProvider = ({ children }: RenderAuthProviderProps) => {
  const [auth, setAuth] = useState<AuthState>(initialAuth);

  const login = (authState: AuthState): void => {
    setAuth(authState);
  };

  const logout = (): void => {
    setAuth(initialAuth);
  };

  // Valores que se van a exponer por medio del Provider
  const data: RenderAuthContextType = {
    auth,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext) as RenderAuthContextType;
};

export { AuthProvider };
export default AuthContext;
