import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2023, 2, 9),
      location: "Delhi",
      title: "Car Insurance",
      amount: 10000,
    },
    {
      date: new Date(2022, 9, 25),
      location: "Mumbai",
      title: "Movie and Dinner",
      amount: 2000,
    },
    {
      date: new Date(2023, 0, 12),
      location: "Chennai",
      title: "Phone Recharge",
      amount: 1000,
    },
    {
      date: new Date(2022, 11, 19),
      location: "Kolkata",
      title: "Glasses",
      amount: 5000,
    },
  ];
  const expenseList = expenses.map((expense) => {
    return (
      <ExpenseItem
        date={expense.date}
        location={expense.location}
        title={expense.title}
        amount={expense.amount}
      ></ExpenseItem>
    );
  });
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseList}
    </div>
  );
}

export default App;