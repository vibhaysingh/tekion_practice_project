
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



function App() {

  const [expenses,setExpenses]=useState([]);
  
  const expenseHandler=(expenses)=>{

    setExpenses((prevExpense)=>{
      return [expenses];
    })
  }

  return (
    <div >
      <h1 style={{color:"white",textAlign:"center"}}className="heADING">Expense Tracker</h1>
      <NewExpense onExpenseChange={expenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
