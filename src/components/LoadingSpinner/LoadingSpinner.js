import React from 'react';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

export default LoadingSpinner;