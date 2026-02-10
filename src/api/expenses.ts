import axios from "axios";

const BASE_URL = "https://expense-tracker-backend-a4bi.onrender.com";

export const createExpense = (data: any) =>
  axios.post(`${BASE_URL}/expenses`, data);

export const getExpenses = () => axios.get(`${BASE_URL}/expenses`);

export const deleteExpense = (id: string) =>
  axios.delete(`${BASE_URL}/expenses/${id}`);
