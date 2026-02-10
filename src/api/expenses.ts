import axios from "axios";

export interface Expense {
  id: string;
  item_name: string;
  amount: number;
  category: string;
  currency: string;
  created_at: string;
}

export interface CreateExpensePayload {
  item_name: string;
  amount: number;
  category: string;
  currency: string;
}

const API_URL = import.meta.env.VITE_API_BASE_URL;

/* GET all expenses */
export const getExpenses = () => {
  return axios.get<Expense[]>(`${API_URL}/expenses`);
};

/* CREATE expense */
export const createExpense = (data: CreateExpensePayload) => {
  return axios.post(`${API_URL}/expenses`, data);
};

/* DELETE expense */
export const deleteExpense = (id: string) => {
  return axios.delete(`${API_URL}/expenses/${id}`);
};
