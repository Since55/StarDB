import React from 'react';
import PropTypes from 'prop-types';

import './double-container.css'

const DoubleContainer = ({left, right}) => {
    return(
        <div className='container cont'>
            {left}
            {right}       
        </div>
    )
}

DoubleContainer.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default DoubleContainer;