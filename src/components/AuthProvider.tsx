import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  context: string[];
  setContext: (context: string[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState(["unauthenticated"]);

  const value = {
    isLoggedIn: context.includes("logged-in"),
    context,
    setContext: (newContext: string[]) => {
      setContext(newContext);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
