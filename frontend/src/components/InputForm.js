import React, { Fragment, useState } from 'react';
import Error from './Error';

const InputForm = ({ setnewBudget, setRemaining, updateQuestion }) => {
    const [state, setState] = useState(0);
    const [error, setError] = useState(false);

    const handleChange = e => {
        setState(parseInt(e.target.value))
    }

    const setBudget = e => {

        e.preventDefault();
        console.log(e)

        //validate
        if (state < 1 || isNaN(state)) {
            setError(true);
            return;
        }

        // //ok validate
        setError(false);
        setnewBudget(state);
        setRemaining(state);
        updateQuestion(false);
    }
    return (
        <Fragment>
            <h2>Enter your budget</h2>
            {error ? <Error message="Error: There's an Error. Enter a valid number" /> : null}
            <form
                onSubmit={setBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="budget $"
                    onChange={handleChange} // another way is e =>  setState( parseInt(e.target.value))
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Get budget"
                />
            </form>
        </Fragment>
    );
}

export default InputForm;