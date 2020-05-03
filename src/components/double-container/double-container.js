import React from 'react';

const DoubleContainer = ({left, right}) => {
    return(
        <div className='form-row'>
            {left}
            {right}       
        </div>
    )
}

export default DoubleContainer;