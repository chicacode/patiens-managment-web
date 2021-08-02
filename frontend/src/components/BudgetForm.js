import React, { useState } from 'react';

const BudgetForm = () => {
    return(
        <form>
            <h2>Add you expenses here</h2>
            <div className="campo">
                <label>Name of expenditure</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="ex. Bus"   
                />
            </div>

            <div className="campo">
                <label>Quantity of expenditure</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="ex. 300"   
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