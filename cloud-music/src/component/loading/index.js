import React from 'react';
import './index.scss';

function Loading() {
    return (
        <div className='loading'>
            <div className='left'></div>
            <div className='right'></div>
        </div>
    );
}

export default React.memo(Loading);