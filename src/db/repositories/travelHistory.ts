import db from "..";
import { setDoc, doc, collection, getDocs, getDoc, query, where, Timestamp, orderBy, limit, startAfter } from 'firebase/firestore';
import { storage } from "..";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { TravelHistoryData, TravelHistoryAddFormData } from 'types';
import { addUserTravelHistory } from "./user";
const COLLECTION_NAME = "travel_histories";

export const getListTravelHistory = async (list: string[], lastDate: any, count: number): Promise<Array<TravelHistoryData>> => {
    const q = lastDate == null ?
    query(collection(db, COLLECTION_NAME), where("id", "in", list), orderBy("createAt", "desc"), limit(count))
    : query(collection(db, COLLECTION_NAME), where("id", "in", list), orderBy("createAt", "desc"), startAfter(lastDate), limit(count));

    console.log(list);
    const travelHistoriesSnapshot = await getDocs(q);
    const data: Array<any> = [];
    travelHistoriesSnapshot.docs.forEach((_data) => {
        console.log(_data.id);
        data.push({ ..._data.data() });
    })
    return travelHistoriesSnapshot.docs.length > 0 ? data as Array<TravelHistoryData> : [];
}

export const getSingleTravelHistory = async (id: string): Promise<TravelHistoryData | null> => {
    const docRef = doc(db, COLLECTION_NAME, id);

    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as TravelHistoryData : null;
}

export const setTravelHistory = async (data: TravelHistoryAddFormData) => {
    const imageRef = ref(storage, `/travel_histories/${data.id}/1.jpg`);

    // @ts-ignore : data.imageFile is not null. the value is checked before calling setTravelHistory function.
    await uploadBytes(imageRef, data.imageFile).catch((error) => {
        alert(error);
    })

    await getDownloadURL(ref(storage, `/travel_histories/${data.id}/1.jpg`)).then(async (url) => {
        await setDoc(doc(db, COLLECTION_NAME, data.id), {
            id: data.id,
            uid: data.uid,
            photoURL: data.photoURL,
            createAt: Timestamp.now(),
            country: data.country,
            site: data.site.toLowerCase(),
            description: data.description,
            tags: data.tags,
            image: url,
            rating: data.rating,
            likes: []
        });
    }).catch((error) => {
        alert(error);
    });

    // save id to user.
    await addUserTravelHistory(data);

}