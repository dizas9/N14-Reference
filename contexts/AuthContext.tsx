"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

// typeScript part
export interface AuthContextType {
  isAuth: boolean;
  errMsg: string;
  authController: (props: AuthControllerProps) => void;
}
export interface ContextProviderProps {
  children: ReactNode;
}
export interface AuthControllerProps {
  username: string;
  password: string;
}

// create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//provide the context

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();

  const authController = ({ username, password }: AuthControllerProps) => {
    if (username === "sazid" && password === "1234") {
      setIsAuth(true);
      router.push("/");
    } else {
      setIsAuth(false);
      setErrMsg("Invalid username or password");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, errMsg, authController }}>
      {children}
    </AuthContext.Provider>
  );
};

// custome Hooks to use context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must used witin AuthProvider");
  }

  return context;
};
