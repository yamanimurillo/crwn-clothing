import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    return (
        <div className='collection-page'>
            <h1 class='title'>{collection.title.toString().toUpperCase()}</h1>

            <div class='items'>
                {
                    collection.items.map(i => {
                        return <CollectionItem
                            key={i.id}
                            item={i}>
                        </CollectionItem>;
                    })
                }
            </div>
        </div>
    );
};

const mapStateToPros = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
};

export default connect(mapStateToPros, null)(CollectionPage);

