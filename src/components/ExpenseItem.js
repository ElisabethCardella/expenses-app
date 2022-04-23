import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

/*
(Javascript code)
const objectCreatedByReact = {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
}
*/

function ExpenseItem(props) {
  console.log("props of ExpenseItem", props);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>{" "}
      </div>
    </div>
  );
}

export default ExpenseItem;
