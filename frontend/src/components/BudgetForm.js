import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const BudgetForm = ({saveExp, saveCreateExp}) => {
    console.log(saveExp)
    const [expense, saveExpense] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        //validate
        if(quantity < 1 || isNaN(quantity) || expense.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);
        // object expense

        const _expenses = {
            expense,
            quantity,
            id: shortid.generate()
        }
        
        // pass props to App component
        saveExp(_expenses);
        saveCreateExp(true)

        // reset form
        saveExpense('');
        saveQuantity(0);
    }

    // ver donde esta mi errror de validaciónx

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add you expenses here</h2>

            {error ? <Error message={'Error: obligatory fields'}/>: null}
            <div className="campo">
                <label>Name of expenditure</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="ex. Bus"   
                    value={expense}
                    onChange={e=>saveExpense(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Quantity of expenditure</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="ex. 300"   
                    value={quantity}
                    onChange={e=>saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            <input type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
    );
}

export default BudgetForm;