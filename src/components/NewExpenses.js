import ExpenseItem from "./ExpenseItem";

// What does React do?

// When this code runs (when component is shown):
// (JSX code)
// <NewExpenses expenses={expenses} totalExpenses={1000} />;

// How 'expenses' and 'totalExpenses' ends up in props?

// React library knows the two properties 'expenses' and 'totalExpenses'

// React library constructs a new object (not 'expenses' object but a completely new one) with those two properties
// How does this object that React creates look like?

/*
(Javascript code)
const objectCreatedByReact = {
    expenses: [{...}, {...}, {...}],
    totalExpenses: 1000
}
*/

// Okay, this object is created
// But where do props come from?
// How React puts these props here?

/*
NewExpenses({
    expenses: [{...}, {...}, {...}],
    totalExpenses: 1000
})
*/

function NewExpenses(props) {
  console.log("props of NewExpenses", props);

  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      ;
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      ;
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      ;
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </div>
  );
}

export default NewExpenses;
