import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  const expenseList = props.items.map((expense) => {
    return (
      <ExpenseItem
        date={expense.date}
        location={expense.location}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });
  return <Card className="expenses">{expenseList}</Card>;
}

export default Expenses;