import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 9th 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">&#8377; 10,000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
