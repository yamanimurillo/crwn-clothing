import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component';
//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
//import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { selectIsColletionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    /*constructor() {
        super();

        this.state = {
            loading: true
        }
    }*/

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();

        /*const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        //As a promise
        collectionRef.get().then((collection) => {
            const collectionsMap = convertCollectionsSnapshotToMap(collection);
            updateCollections(collectionsMap);
            this.setState({ loading: false});
        }); */

        //As an observable
        /*this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false});
        })*/
    }

    componentWillUnmount() {
        //this.unsubscribeFromSnapshot();
    }

    render() {
        const { match, isCollectionLoaded } = this.props;
        //const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer} />
            </div>
        )
    }

};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsColletionsLoaded
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
    /*return {
        updateCollections: (collectionsMap) => {
            return dispatch(updateCollections(collectionsMap))
        }
    }*/
};

export default connect(null, mapDispatchToProps)(ShopPage);