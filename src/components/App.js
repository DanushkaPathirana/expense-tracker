import React from "react"

import ExpenseItem from "./ExpenseItem"

const DUMMY_EXPENSES = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
]

const App = () => {
    return(
        <div>
            <ExpenseItem id={DUMMY_EXPENSES[0].id} title={DUMMY_EXPENSES[0].title} amount={DUMMY_EXPENSES[0].amount} date={DUMMY_EXPENSES[0].date} />
            <ExpenseItem id={DUMMY_EXPENSES[1].id} title={DUMMY_EXPENSES[1].title} amount={DUMMY_EXPENSES[1].amount} date={DUMMY_EXPENSES[1].date} />
            <ExpenseItem id={DUMMY_EXPENSES[2].id} title={DUMMY_EXPENSES[2].title} amount={DUMMY_EXPENSES[2].amount} date={DUMMY_EXPENSES[2].date} />
            <ExpenseItem id={DUMMY_EXPENSES[3].id} title={DUMMY_EXPENSES[3].title} amount={DUMMY_EXPENSES[3].amount} date={DUMMY_EXPENSES[3].date} />
        </div>
    )
}

export default App
