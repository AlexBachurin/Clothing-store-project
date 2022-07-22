import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	UserCredential,
	NextOrObserver,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	QueryDocumentSnapshot,
} from "firebase/firestore";
import { CategoryMap } from "../../store/categories/categoriesTypes";
import { UserData } from "../../store/user/userTypes";
const firebaseConfig = {
	apiKey: "AIzaSyBIgVjNHPDpzwnDP_PoCq77z0-j2snE9A4",
	authDomain: "clothing-store2022-442f6.firebaseapp.com",
	projectId: "clothing-store2022-442f6",
	storageBucket: "clothing-store2022-442f6.appspot.com",
	messagingSenderId: "779990375257",
	appId: "1:779990375257:web:26391a1defe5d8804aca48",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
// for google
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
//google popup
export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, googleProvider);
};
//google redirect
export const signInWithGoogleRedirect = () => {
	return signInWithRedirect(auth, googleProvider);
};

//auth with email and password
export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string
): Promise<void | UserCredential> => {
	//if no email or password provided just return
	if (!email || !password) return;
	//else create user
	return await createUserWithEmailAndPassword(auth, email, password);
};

//login with email and password
export const loginWithEmailAndPassword = async (
	email: string,
	password: string
): Promise<void | UserCredential> => {
	//if no email or password provided just return
	if (!email || !password) return;
	//else return promise
	return await signInWithEmailAndPassword(auth, email, password);
};

//LOGOUT
export const signOutUser = async () => {
	return await signOut(auth);
};

//AUTH LISTENER
//take callback and then auth state changes call this callback
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
	//this is permanent listener
	return onAuthStateChanged(auth, callback);
};

//get current user
export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		//unsubscribe the moment we get a value
		const unsubcribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				//when we get the value, immediately unsubscribe from listener
				//to prevent memory leak
				unsubcribe();
				//then resolve with userAuth value
				resolve(userAuth);
			},
			//if error reject
			reject
		);
	});
};

//create db(points to our database)
export const db = getFirestore();

export type AdditionalInformation = {
	displayName?: string;
};

//create Users in our database
export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalInformation: AdditionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
	if (!userAuth) return;
	//we want to get data from user authentication and store it inside our db
	// db = database, 'users' - collection name, id of user(user.uid) - document name
	const userDocRef = doc(db, "users", userAuth.uid);
	//create snapshot to check if instance of userDocRef exists in database
	const userSnapshot = await getDoc(userDocRef);

	//if user data not exits
	if (!userSnapshot.exists()) {
		//create/set the document with data from userAuth to collection
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error at creating user document", error);
		}
	}
	//if user data exists
	return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export type ObjectToAdd = {
	title: string;
};

//method to upload categories from internal data to firebase
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
	collectionKey: string,
	objectsToAdd: T[]
): Promise<void> => {
	//create new collection in our db, with passed name(collectionKey);
	const collectionRef = collection(db, collectionKey);
	//write all objects to collection in 1 successfull transaction
	const batch = writeBatch(db);

	objectsToAdd.forEach((obj) => {
		//create new document in db
		const docRef = doc(collectionRef, obj.title.toLowerCase());
		//set new document with value of passed object
		batch.set(docRef, obj);
	});
	//fire it off
	await batch.commit();
	console.log("done batching to db");
};

//fetch categories data from db
export const getCategoriesAndDocuments = async (): Promise<CategoryMap> => {
	const collectionRef = collection(db, "categories");
	//get query to create snapshow
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);
	//transform to needed data
	const categoryMap = querySnapshot.docs.reduce((acc, curDocSnapshot) => {
		const { title, items } = curDocSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {} as CategoryMap);

	return categoryMap;
};
