🌍 Global Expense Tracker – Frontend
A modern, responsive frontend for the Global Expense Tracker application.
Built with React + TypeScript + Vite, styled with a custom theme, and deployed on Vercel.

🚀 Tech Stack
React – UI framework
TypeScript – Type safety
Vite – Fast build tooling
Axios – API requests
Chart.js / Recharts – Data visualization
Vercel – Deployment

🎨 UI Theme
Primary background: #30364F
Page background: #ACBAC4
Font: Google Sans Code
Text color: #F0F0DB
Inputs: #E1D9BC
Designed to be clean, readable, and portfolio-ready.

📦 Features
Add expenses with category & currency
Delete expenses
View total spending
Visualize expenses via charts
Fully responsive layout
Connected to live backend API

📂 Project Structure
src/
├── api/
│ └── expenses.ts # API calls & types
├── component/
│ ├── ExpenseForm.jsx
│ ├── ExpenseList.jsx
│ ├── ExpenseChart.jsx
│ └── TotalSpending.jsx
├── App.tsx
├── main.tsx
└── styles/

🔧 Environment Variables
Create a .env file in the root:
VITE_API_BASE_URL=https://expense-tracker-backend-a4bi.onrender.com
▶️ Local Development
npm install
npm run dev
App runs at:
http://localhost:5173

🌐 Deployment
Platform: Vercel
Build command: npm run build
Output directory: dist/
Live URL:
https://expense-tracker-frontend-tqzs-opkvua1l5.vercel.app

🧪 Notes
Backend runs on a free tier and may cold-start after inactivity
Frontend is always available
CORS is configured securely for production

👤 Author
Pankaj Mahato
Full Stack Developer | React | TypeScript | FastAPI
