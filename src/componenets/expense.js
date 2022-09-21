import "../App.css";
import ExpenseDate from './expenseDate'

function Expense(props) {

  return (
    <div className="expense-item">
      <ExpenseDate expense = {props.expense} />

      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>

        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default Expense;
