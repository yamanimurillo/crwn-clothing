import { createSelector } from 'reselect';

const selectShop = (state) => {
    return state.shop;
}

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) => {
    return createSelector(
        [selectCollections],
        collections => {
            return collections ? collections[collectionUrlParam.toLowerCase()] : null;
        }
    )
}
export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsColletionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);