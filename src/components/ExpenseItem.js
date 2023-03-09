import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 2, 9);
  const expenseLocation = "Delhi";
  const expenseTitle = "Car Insurance";
  const expenseAmount = 10000;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseLocation}</h2>
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">&#8377;{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
