import React, { Fragment, useState } from 'react';

const InputForm = () => {
    const [state, setState] = useState(0);

    const handleChange = e => {
        setState( parseInt(e.target.value))
    }

    return(
        <Fragment>
            <h2>Enter you budget</h2>
            <form>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="budget $"
                    onChange={handleChange}
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