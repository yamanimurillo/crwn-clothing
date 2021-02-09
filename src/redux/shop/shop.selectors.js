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
    collections => {
        const keys = Object.keys(collections);
        return keys.map(key => {
            return collections[key];
        })
    }
);

export const selectCollection = (collectionUrlParam) => {
    return createSelector(
        [selectCollections],
        collections => {
            return collections[collectionUrlParam.toLowerCase()]; 
        }
    )
}