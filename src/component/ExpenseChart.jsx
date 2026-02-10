import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./ExpenseChart.css";

const COLORS = ["#30364F", "#4A5170", "#6B7394", "#9FA6C3", "#C7CCE1"];

const ExpenseChart = ({ expenses }) => {
  const data = Object.values(
    expenses.reduce((acc, exp) => {
      if (!acc[exp.category]) {
        acc[exp.category] = {
          name: exp.category,
          value: 0,
        };
      }
      acc[exp.category].value += exp.amount;
      return acc;
    }, {}),
  );

  if (data.length === 0) return null;

  return (
    <div className="chart-container">
      <h2 className="chart-title">📊 Spending by Category</h2>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;
