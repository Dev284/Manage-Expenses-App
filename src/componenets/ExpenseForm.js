import { useState } from "react";
import "../App.css";
// import ExpenseDate from './expenseDate'

function ExpenseForm() {

  const [Data, setData] = useState({
    Title: "",
    Amount: "",
    Date: "",
  });

  const handleTitleChange = (event) => {
    setData({
      ...Data,
      Title: event.target.value,
    });
  };

  const handleAmountChange = (event) => {
    setData({
      ...Data,
      Amount: event.target.value,
    });
  };

  const handleDateChange = (event) => {
    setData({
      ...Data,
      Date: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title:Data.Title,
      amout:Data.Amount,
      date: new Date(Data.Date)
    }
    console.log(expenseData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title: </lable>
          <input type="text" onChange={handleTitleChange} />
        </div>

        <div className="new-expense__control">
          <lable>Amount: </lable>
          <input type="number" onChange={handleAmountChange} />
        </div>

        <div className="new-expense__control">
          <lable>Date: </lable>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={handleDateChange}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
