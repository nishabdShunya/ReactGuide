import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.items;
  let expenseList = [];
  for (let i = 0; i < expenses.length; i++) {
    expenseList.push(
      <ExpenseItem
        key={i}
        date={expenses[i].date}
        location={expenses[i].location}
        title={expenses[i].title}
        amount={expenses[i].amount}
      />
    );
  }
  return <Card className="expenses">{expenseList}</Card>;
};

export default Expenses;
