import React from 'react';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
            <h1 className='collections-overview-title'>BEST SELLLERS</h1>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);