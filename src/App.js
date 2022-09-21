import "./App.css";
import MainExpense from "./componenets/MainExpense";
import NewExpense from "./componenets/NewExpense";

function App() {
  const expense = [
    {
      title: "Car Insurance",
      amount: 5600,
      date: new Date(2021, 1, 21),
    },
    {
      title: "Car Finance",
      amount: 506000,
      date: new Date(2021, 0, 21),
    },
    {
      title: "Car Service",
      amount: 1000,
      date: new Date(2021, 2, 21),
    },
    {
      title: "Car Purchase",
      amount: 120000,
      date: new Date(2020, 8, 21),
    },
  ];

  return (
    <div>
      <NewExpense />
      <MainExpense expense={expense} />
    </div>
  );
}

export default App;
