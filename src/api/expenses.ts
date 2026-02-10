import axios from "axios";

export interface Expense {
  id: string;
  item_name: string;
  amount: number;
  category: string;
  currency: string;
  created_at: string;
}

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getExpenses = () => axios.get(`${API_URL}/expenses`);
export const createExpense = (data) => axios.post(`${API_URL}/expenses`, data);
export const deleteExpense = (id) => axios.delete(`${API_URL}/expenses/${id}`);
