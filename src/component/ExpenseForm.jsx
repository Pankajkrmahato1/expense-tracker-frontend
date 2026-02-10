import { useState } from "react";
import { createExpense } from "../api/expenses";
import "./ExpenseForm.css";

const ExpenseForm = ({ onExpenseAdded }) => {
  const [formData, setFormData] = useState({
    item_name: "",
    amount: "",
    category: "",
    currency: "INR",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      item_name: formData.item_name.trim(),
      amount: Number(formData.amount),
      category: formData.category.trim(),
      currency: formData.currency,
    };

    try {
      await createExpense(payload);

      setFormData({
        item_name: "",
        amount: "",
        category: "",
        currency: "INR",
      });

      onExpenseAdded();
    } catch (error) {
      console.error("Failed to add expense:", error.response?.data || error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2 className="form-title">➕ Add Expense</h2>

      <input
        className="form-input"
        name="item_name"
        placeholder="Item name"
        value={formData.item_name}
        onChange={handleChange}
        required
      />

      <input
        className="form-input"
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      <input
        className="form-input"
        name="category"
        placeholder="Category (Food, Travel...)"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <select
        className="form-input"
        name="currency"
        value={formData.currency}
        onChange={handleChange}
      >
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <button type="submit" className="submit-btn">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
