import "../App.css";
import Expense from "./expense";

function MainExpense(props) {

  return (
    <>
      <header className="App-header">
        <h1>Let's Get Started</h1>
      </header>

      <div className="expenses">

      <div className="App">
        <Expense expense={props.expense[0]} />
      </div>
      <div className="App">
        <Expense expense={props.expense[1]} />
      </div>
      <div className="App">
        <Expense expense={props.expense[2]} />
      </div>
      <div className="App">
        <Expense expense={props.expense[3]} />
      </div>
      </div>


    </>
  );
}

export default MainExpense;
