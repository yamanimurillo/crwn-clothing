import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVqr0osHcuP8CNw58_BYnlZ9_a4lLMPmo",
    authDomain: "crwn-db-94579.firebaseapp.com",
    databaseURL: "https://crwn-db-94579.firebaseio.com",
    projectId: "crwn-db-94579",
    storageBucket: "crwn-db-94579.appspot.com",
    messagingSenderId: "22286361378",
    appId: "1:22286361378:web:9461a6b2ef9a2fa7087b7b",
    measurementId: "G-Z302TYD561"
};

const app = firebase.initializeApp(firebaseConfig);
var loggedUser = false;

export const auth = firebase.auth();
export const firestore = firebase.firestore(app);
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) {
        return;
    }

    loggedUser = true;

    let userRef = firestore.doc(`users/${userAuth.uid}`);
    let userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            alert('Error creating user: ' + error.message);
        }
    }

    return userRef;
};

export const initializeCollectionAndDocuments = async (collectionKey, objectsToAdd = []) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();

        batch.set(newDocRef, obj);
        console.log(newDocRef);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title),
            id: doc.id,
            title, 
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {} );

 };

export const isUserLogged = loggedUser;
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;