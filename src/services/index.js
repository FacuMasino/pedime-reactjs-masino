import { collection, getDocs, doc, getDoc, query, where, orderBy } from 'firebase/firestore';

import { db } from './firebase';

export const getProducts = async () => {
	const querySnapshot = await getDocs(
		query(collection(db, 'items'), orderBy('categoryId'), orderBy('price', 'asc'))
	);
	const docs = [];
	querySnapshot.forEach((doc) => docs.push({ id: doc.id, ...doc.data() }));
	return docs;
};

export const getProductById = async (id) => {
	const docRef = doc(db, 'items', id);
	const docSnap = await getDoc(docRef);
	return { id: docSnap.id, ...docSnap.data() };
};

export const getProductsByCategory = async (categoryId) => {
	const q = query(
		collection(db, 'items'),
		where('categoryId', '==', categoryId.toUpperCase()),
		orderBy('price', 'asc')
	);
	const qSnap = await getDocs(q);
	const docs = [];
	qSnap.forEach((doc) => docs.push({ id: doc.id, ...doc.data() }));
	return docs;
};
