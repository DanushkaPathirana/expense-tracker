import React, { useState } from "react"

import Card from "../UI/Card"
import ExpensesFilter from "./Filter/ExpensesFilter"
import ExpenseList from "./ExpenseList"

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
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses
