import { useEffect, useState } from "react";
import { getExpenses } from "./api/expenses";

import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import ExpenseChart from "./component/ExpenseChart";
import TotalSpending from "./component/TotalSpending";

import type { Expense } from "./api/expenses";

import "./App.css";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="app-container">
      <div className="app-wrapper">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">🌍 Global Expense Tracker</h1>
          <p className="app-subtitle">
            Track, visualize and convert expenses in real-time
          </p>
        </header>

        {/* Grid Layout */}
        <div className="dashboard-grid">
          {/* Left Column */}
          <div className="left-column">
            <Card>
              <ExpenseForm onExpenseAdded={fetchExpenses} />
            </Card>

            <Card>
              <TotalSpending expenses={expenses} />
            </Card>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <Card>
              <ExpenseChart expenses={expenses} />
            </Card>

            <Card>
              <ExpenseList
                expenses={expenses}
                onExpenseDeleted={fetchExpenses}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>;
};

export default App;
