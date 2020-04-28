import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <div className='error-cont'>
             <img 
                className='failImg'
                alt='Everything is going wrong in this world, don`t mind,
                You don`t really need it' 
                src="http://getdrawings.com/vectors/death-star-vector-10.png"></img>
            <span className='badge-danger'>Looks like something gone wrong, 
            use Your power, to fix it!</span>
        </div>
    )
}

export default ErrorIndicator;