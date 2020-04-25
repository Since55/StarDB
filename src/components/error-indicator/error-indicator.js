import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <div>
            <img 
                className='failImg'
                src="https://starwars-visualguide.com/assets/img/placeholder.jpg"></img>
            <span className='badge-danger'>THIS IS NOT THE DATA YOU ARE LOOKING FOR.</span>
        </div>
    )
}

export default ErrorIndicator;