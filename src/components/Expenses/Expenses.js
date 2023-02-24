import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
   
    let myExpenses =[]
    myExpenses= JSON.parse(localStorage.getItem('Expenses'));
    let filteredExpense = [];
   
    if (props.items.length > 0) {
       

        if (myExpenses !== null) {
            const tempExpenses = [...myExpenses, ...props.items];
            const result = Object.values(
                tempExpenses.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {})
            );
            localStorage.setItem('Expenses', JSON.stringify(result));
            myExpenses = JSON.parse(localStorage.getItem('Expenses'));

        }
        else {

            localStorage.setItem('Expenses', JSON.stringify(props.items));
            myExpenses = JSON.parse(localStorage.getItem('Expenses'));

        }


    }
   


    if (myExpenses !==null) {
        myExpenses.map((item) => {
            return item.date = new Date(item.date);
        })

        filteredExpense = myExpenses.filter((item) => {
            return item.date.getFullYear() === +filteredYear;
        })
    }



    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpense} />

            {
                filteredExpense.length === 0 ? <p style={{ color: "white", paddingLeft: "16px", fontWeight: "600" }}>No Expenses Found !</p> : filteredExpense.map((item) => {
                    return (

                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                })
            }

        </Card>
    );
}

export default Expenses;