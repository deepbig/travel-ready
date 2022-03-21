import db from "..";
import { collection, doc, getDoc, setDoc, getDocs, query, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { UserData } from 'types';
const COLLECTION_NAME = "users";

export const getAllUsers = async (): Promise<Array<UserData>> => {
    const q = query(collection(db, COLLECTION_NAME));

    const usersSnapshot = await getDocs(q);
    const data: Array<any> = [];

    usersSnapshot.docs.forEach((_data) => {
        data.push({ ..._data.data() });
    })

    return usersSnapshot.docs.length > 0 ? data as Array<UserData> : [];
}

export const getLoggedInUser = async (user: { uid: string; displayName: any; email: any; photoURL: any; }): Promise<UserData> => {
    const docRef = doc(db, COLLECTION_NAME, user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as UserData;
    } else {
        // add doc
        try {
            await setDoc(doc(db, COLLECTION_NAME, user.uid), {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                Budget: 0,
                countries_visited: [],
                places_visited: [],
                tags: [],
                travels: 0,
                countries_plan: [],
                places_plan: [],
            });
        } catch (e) {
            // need to handle error case.
            return null as UserData;
        }
        const newDocSnap = await getDoc(docRef);
        return newDocSnap.data() as UserData;
    }
}

/**
 * This function will be used after user update user profile (plan, visited, travel post).
 * @param uid 
 * @returns 
 */
export const getUserFromDB = async (uid: string): Promise<UserData> => {
    const docRef = doc(db, COLLECTION_NAME, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as UserData;
    } else {
        alert('user does not exist!');
        return null;
    }
}

export const addUserCountry = async (uid: string, country: string) => {
    const docRef = doc(db, COLLECTION_NAME, uid);
    await updateDoc(docRef, {
        countries_plan: arrayUnion(country)
    });
}

export const deleteUserCountry = async (uid: string, country: string) => {
    const docRef = doc(db, COLLECTION_NAME, uid);
    await updateDoc(docRef, {
        countries_plan: arrayRemove(country)
    });
}