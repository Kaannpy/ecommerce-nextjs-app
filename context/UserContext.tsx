"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type UserContextType = {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

import { ReactNode } from "react";

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
