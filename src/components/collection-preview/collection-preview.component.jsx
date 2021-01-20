import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    props.items
                        .filter((item, idx) => {
                            return idx <= 3;
                        })
                        .map(item => {
                            return <CollectionItem
                                key={item.id}
                                item={item}
                                />
                        })
                }
            </div>
        </div>
    )
};

export default CollectionPreview; 