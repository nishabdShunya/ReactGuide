import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2023, 2, 9),
    title: "Car Insurance",
    amount: 10000,
  },
  {
    id: "e2",
    date: new Date(2022, 9, 25),
    title: "Movie and Dinner",
    amount: 2000,
  },
  {
    id: "e3",
    date: new Date(2023, 0, 12),
    title: "Phone Recharge",
    amount: 1000,
  },
  {
    id: "e4",
    date: new Date(2022, 11, 19),
    title: "Glasses",
    amount: 5000,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
