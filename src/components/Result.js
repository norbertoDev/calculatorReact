  
import React from 'react';

const Result = (props) => {
    return(
        <div>
            <h3>{props.arrayExpression}</h3>
            <h3>{props.inputExpression}</h3>
        </div>
    )
}

export default Result;