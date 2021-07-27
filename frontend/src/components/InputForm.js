import React, { Fragment, useState } from 'react';

const InputForm = () => {
    const [state, setState] = useState(0);

    const handleChange = e => {
        setState( parseInt(e.target.value))
    }

    const setBudget = e => {
        e.preventDefaul();
        console.log(e)

        //validate


        //ok validate
    }
    return(
        <Fragment>
            <h2>Enter you budget</h2>
            <form 
                 onSubmit={setBudget}>
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