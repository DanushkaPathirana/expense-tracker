import React, { useState } from "react"

import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./Filter/ExpensesFilter"

import "./Expenses.css"

const Expenses = (props) => {
    const[filteredYear, setFilteredYear] = useState()

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear
    })

    return(
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} value={filteredYear} />
            {
                filteredExpenses.map((item) => (
                    <ExpenseItem key={item.id} id={item.id} title={item.title} amount={item.amount} date={item.date} />
                ))
            }
        </Card>
    )
}

export default Expenses
