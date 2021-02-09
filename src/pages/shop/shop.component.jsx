import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component';

const ShopPage = ({ match, location, history }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
        </div>
    );
};

export default ShopPage;