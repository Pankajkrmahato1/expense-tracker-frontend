import { useEffect, useState } from "react";
import { getRates } from "../api/currency";
import "./TotalSpending.css";

const SUPPORTED_CURRENCIES = ["INR", "USD", "EUR"];

const TotalSpending = ({ expenses }) => {
  const [baseCurrency, setBaseCurrency] = useState("INR");
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    const calculateTotal = async () => {
      if (expenses.length === 0) return;

      const rates = await getRates("USD");
      let sum = 0;

      expenses.forEach((exp) => {
        if (exp.currency === baseCurrency) {
          sum += exp.amount;
        } else {
          const rate = rates[baseCurrency] / rates[exp.currency];
          sum += exp.amount * rate;
        }
      });

      setTotal(sum.toFixed(2));
    };

    calculateTotal();
  }, [expenses, baseCurrency]);

  if (expenses.length === 0) return null;

  return (
    <div className="total-card">
      <div className="total-header">
        <h2>💱 Total Spending</h2>

        <select
          className="currency-select"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          {SUPPORTED_CURRENCIES.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

      <div className="total-value">
        <span className="currency">{baseCurrency}</span>
        <span className="amount">{total}</span>
      </div>
    </div>
  );
};

export default TotalSpending;
