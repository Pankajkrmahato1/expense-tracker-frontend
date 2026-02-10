import { deleteExpense } from "../api/expenses";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, onExpenseDeleted }) => {
  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      onExpenseDeleted();
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  return (
    <div className="expense-list-container">
      <h2 className="list-title">📋 Expenses List</h2>

      <div className="table-wrapper">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Currency</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((exp) => (
              <tr key={exp.id}>
                <td>{exp.item_name}</td>
                <td>{exp.amount}</td>
                <td>{exp.category}</td>
                <td>{exp.currency}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(exp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
