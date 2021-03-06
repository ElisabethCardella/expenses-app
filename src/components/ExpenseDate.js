import "./ExpenseDate.css";

/*
(Javascript code)
const objectCreatedByReact = {
    date: new Date(2020, 7, 14),
}
*/

function ExpenseDate(props) {
  console.log("props of ExpenseDate", props);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { year: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExpenseDate;
