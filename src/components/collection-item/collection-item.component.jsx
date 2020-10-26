import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, ...otherProps }) => {
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage: `url(${otherProps.imageUrl})` }}>

            </div>

            <div className='footer'>
                <span className='name'>{otherProps.name}</span>
                <span className='price'>${otherProps.price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;