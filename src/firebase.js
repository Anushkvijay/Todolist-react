import {firebase} from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAMOL2H4_SBL9Ny-a37_8kTWlOfUa72mMo",
    authDomain: "todolist-react-8f971.firebaseapp.com",
    databaseURL: "https://todolist-react-8f971-default-rtdb.firebaseio.com",
    projectId: "todolist-react-8f971",
    storageBucket: "todolist-react-8f971.appspot.com",
    messagingSenderId: "510303763665",
    appId: "1:510303763665:web:429e97bbd5783019fbd9f0"

});

export {firebaseConfig as firebase}