import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    
   
    const handleExpenses =(expenses)=>{
        const finalExpense={
            ...expenses,
            id: new Date().getTime()
        }
        props.onExpenseChange(finalExpense);
    }

    

    return (
        <div className='new-expense'>
            <ExpenseForm onhandleExpense={handleExpenses}/>
        </div>
    );
};

export default NewExpense;