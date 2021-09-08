import React, {  Fragment } from 'react'


const ControlBudget = ({budget, remaining}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: ${budget}
            </div>
            <div className="alert ">
                Remain: $ {remaining}
            </div>
        </Fragment>

    )
}

export default ControlBudget;

