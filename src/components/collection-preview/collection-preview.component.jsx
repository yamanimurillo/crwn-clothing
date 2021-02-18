import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';
import './collection-preview.styles.scss';
import {Link} from 'react-router-dom';

const CollectionPreview = ({title, items, match}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <Link to={`${match.path}/${title.toLowerCase()}`} className='view-all'>View all</Link>
            <div className='preview'>
                {
                    items
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

export default withRouter(CollectionPreview); 