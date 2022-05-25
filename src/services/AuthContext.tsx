import { FC, useEffect, createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { auth } from "../firebase-config";

export const AuthContext = createContext<User | null | undefined>(null);

interface IAuthProviderProps {
  children: any;
}

const AuthProvider: FC<IAuthProviderProps> = (props: IAuthProviderProps) => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user !== null) {
      console.log("User Authenticated.");
    }
    if (error) {
      console.log("error in auth state: ", error.message);
    }
  }, [user, loading, error]);

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
