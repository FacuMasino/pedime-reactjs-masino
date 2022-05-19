import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDw_s0oT1aJYBEpL3yuI88S5MBESthpc60',
	authDomain: 'pedime-reactjs-masino.firebaseapp.com',
	projectId: 'pedime-reactjs-masino',
	storageBucket: 'pedime-reactjs-masino.appspot.com',
	messagingSenderId: '805009249960',
	appId: '1:805009249960:web:5bf1c1237af30f1762149d',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
