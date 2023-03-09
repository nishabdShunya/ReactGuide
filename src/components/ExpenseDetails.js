import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h3>{props.location}</h3>
      <h2>{props.title}</h2>
      <div className="expense-item__price">&#8377;{props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
