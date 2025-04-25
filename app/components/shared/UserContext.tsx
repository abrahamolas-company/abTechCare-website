import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { catchError } from '../constants/catchError';
import { EngineerResponse, Users } from '../models/IUsers';
import { useGetEngineer, useGetUsers } from '@/app/api/apiClient';

interface UserContextType {
  user: Users | undefined;
  engineer: EngineerResponse | undefined;
  fetchUsers: (id: number) => Promise<void>;
  fetchEngineer: (id: number) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getUsers = useGetUsers();
  const getEngineer = useGetEngineer();
  const [user, setUser] = useState<Users>();
  const [engineer, setEngineer] = useState<EngineerResponse>();

  const fetchUsers = async (id: number) => {
    getUsers(id)
      .then((response) => {
        console.log({ response });
        setUser(response.data.data);
      })
      .catch((error) => {
        catchError(error);
        // toast.error('An error occurred. Please try again.');
      });
  };

  const fetchEngineer = async (id: number) => {
    getEngineer(id)
      .then((response) => {
        console.log({ response });
        setEngineer(response.data.data);
      })
      .catch((error) => {
        catchError(error);
        // toast.error('An error occurred. Please try again.');
      });
  };

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      const id = JSON.parse(storedId);
      fetchUsers(id);
    }
  }, []);

  useEffect(() => {
    const storedId = localStorage.getItem('engineerId');
    if (storedId) {
      const id = JSON.parse(storedId);
      fetchEngineer(id);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        fetchUsers,
        engineer,
        fetchEngineer
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};