import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2023, 2, 9),
      title: "Car Insurance",
      amount: 10000,
    },
    {
      date: new Date(2022, 9, 25),
      title: "Movie and Dinner",
      amount: 2000,
    },
    {
      date: new Date(2023, 0, 12),
      title: "Phone Recharge",
      amount: 1000,
    },
    {
      date: new Date(2022, 11, 19),
      title: "Glasses",
      amount: 5000,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
