import {
  collection,
  query,
  where,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from ".";

export type Party = {
  name: string;
  code: string;
  createdAt: Date;
  admin: string;
  members: string[];
};

const partiesRef = collection(db, "parties");

export const createNewParty = (party: Party) => {
  return addDoc(partiesRef, {
    ...party,
    createdAt: Timestamp.fromDate(party.createdAt),
  });
};

export const queryUserParties = query(
  partiesRef,
  where("members", "array-contains", auth.currentUser?.uid)
);
