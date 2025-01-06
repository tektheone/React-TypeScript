import { createContext, useEffect, useState } from "react";

export interface User {
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const contextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
}

const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
  children: React.ReactNode
}

export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers([
      { name: 'TheOne', age: 22, isMarried: false },
      { name: 'Ramses', age: 29, isMarried: false }
    ])
  }, []);

  const addUser = () => null;
  const updateUser = () => null;
  const deleteUser = () => null;

  return <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>{props.children}</UserContext.Provider>
}