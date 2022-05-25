import { auth } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider, UserCredential } from "firebase/auth";

export const signInGoogle = async () => {
  const provider: GoogleAuthProvider = new GoogleAuthProvider();
  const result: UserCredential = await signInWithPopup(auth, provider);
  return result.user;
};

export const signOut = async () => {
  return await auth.signOut();
}