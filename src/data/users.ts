import { collection, query, where } from "firebase/firestore";
import { db } from ".";

export const usersCollection = collection(db, "users");

export const queryUserByUID = (uid: string) => {
  return query(usersCollection, where("uid", "==", uid));
};
