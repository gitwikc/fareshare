import {
  collection,
  query,
  where,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from ".";

type Expense = {
  partyId: string;
  item: string;
  amount: number;
  uid: string;
  createdAt: Date;
};

export const expensesRef = collection(db, "expenses");

export const queryPartyExpenses = (partyId: string) => {
  return query(expensesRef, where("partyId", "==", partyId));
};

export const addExpense = (expense: Expense) => {
  return addDoc(expensesRef, {
    ...expense,
    createdAt: Timestamp.fromDate(expense.createdAt),
  });
};
