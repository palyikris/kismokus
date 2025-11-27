// pagefor: store functions related to using the firebase services

import { db, storage } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { makeId } from "./random";
import { GetDatesBetween } from "./inbetween";
import { AddZero } from "./addzero";

// idea: push a new reservation made by the user to the database
export async function MakeNewReservation(object) {
  // prompt: it has a prop named object, the function gets an object with the values of the user's reservation

  // def: trycatch is if an error happens the app doesnt break

  try {
    let data = object;
    let randomString = makeId(20); // prompt: making an id for the new reservation in the database
    randomString = randomString.replace(/\s+/g, "");
    let dbInstance = doc(db, `${data.apartmanType}/${randomString}`); // prompt: setting where to store it in the database

    // prompt: pushing the reservation to the database with the values obtained from the object given to the function
    let response = await setDoc(dbInstance, {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber.replace(/\s+/g, ""),
      parents: data.parents,
      children: data.children,
      note: data.note,
      apartmanNumber: data.apartmanNumber,
      apartmanType: data.apartmanType,
      arrDate: data.arrDate,
      depDate: data.depDate,
      seen: false
    });

    return randomString;
  } catch (error) {
    console.error(error);
    throw new Error(error);
    return false;
  }
}

// idea: return a reservation filtered by the apartman type eg.: dreamHouse, dreamLelle, and by the number of apartman, eg.: 1,2,3
export async function FetchApartmanReservation(type, number) {
  try {
    let dbInstance = collection(db, type);
    // prompt: getting the set of reservations in the collection of the given apartman type

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      // prompt: converting the contents of the reservations into objects and adding the id
      data.push({ ...doc.data(), id: doc.id });
    });

    // prompt: filtering the reservations leaving only those that have the same apartman number as given to the function
    data = data.filter(doc => doc.apartmanNumber === number);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
    return false;
  }
}

// ! --------------------------------------------
// idea: return only one reservation based on an id
export async function FetchReservationById(id) {
  try {
    // prompt: getting all the reservations from all the apartmans
    let apartmanData = await FetchApartmanData();
    let houseData = await FetchHouseData();
    let topartData = await FetchTopartData();

    // prompt: now check if each apartman has reservations at all and if yes filter for the id given in the function
    // prompt: that will result 2 empty lists or undefined or whatevs and one list with only one reservation, the one with the id given
    // prompt: we check which one it is and return the first element aka the correct reservation
    if (apartmanData != false && apartmanData.length > 0) {
      apartmanData = apartmanData.filter(
        data => data.id.replace(/\s+/g, "") === id.replace(/\s+/g, "")
      );
      if (apartmanData.length > 0) {
        return apartmanData;
      }
    }
    if (houseData != false && houseData.length > 0) {
      houseData = houseData.filter(
        data => data.id.replace(/\s+/g, "") === id.replace(/\s+/g, "")
      );
      if (houseData.length > 0) {
        return houseData;
      }
    }
    if (topartData != false && topartData.length > 0) {
      topartData = topartData.filter(
        data => data.id.replace(/\s+/g, "") === id.replace(/\s+/g, "")
      );
      if (topartData.length > 0) {
        return topartData;
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    throw new Error(error);
    return false;
  }
}

// idea: the following three are helper function for the one before, all fetching the reservations from one type of apartman
async function FetchApartmanData() {
  try {
    let dbInstance = collection(db, "dreamapartman");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    throw new Error(error);
    console.error(error);
    return false;
  }
}

async function FetchHouseData() {
  try {
    let dbInstance = collection(db, "dreamhouse");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    throw new Error(error);
    console.error(error);
    return false;
  }
}

async function FetchTopartData() {
  try {
    let dbInstance = collection(db, "dreamtopart");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    throw new Error(error);
    console.error(error);
    return false;
  }
}

// ! -------------------------------------------

export async function FetchReservedDatesOfApartman(type, number) {
  try {
    let data = await FetchApartmanReservation(type, number);
    // prompt: fetch all the reservations from an apartman
    let reservedDates = [];
    for (let i = 0; i < data.length; i++) {
      // prompt: for each reservation push the arrival and departure dates to the reservedDates list
      let tempReservedDates = GetDatesBetween(data[i].arrDate, data[i].depDate);
      // idea: create list with dates between the arrival and departure
      for (let j = 0; j < tempReservedDates.length; j++) {
        // prompt: iterate thru these dates
        // prompt: add them to the reservedDates
        reservedDates.push(tempReservedDates[j]);
      }
    }

    return reservedDates;
  } catch (error) {
    throw new Error(error);
    console.error(error);
    return error;
  }
}

export async function FetchApartmanDataByApartmanType(type) {
  try {
    let dreamType = `dream${type}`;
    let dbInstance = collection(db, dreamType);

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    throw new Error(error);
    console.error(error);
    return false;
  }
}

export async function SetDocumentSeen(type, id) {
  try {
    let dreamType = `dream${type}`;
    // prompt: setting the reservation with the given id as the doc to update
    let dbInstance = doc(db, `${dreamType}/${id}`);
    let response = await updateDoc(dbInstance, { seen: true });
    // prompt: updating the seen value to true
    return true;
  } catch (error) {
    throw new Error(error);
    console.error(error);
    return false;
  }
}

export async function DeleteReservation(type, id) {
  try {
    let dreamType = `dream${type}`;
    let dbInstance = doc(db, `${dreamType}/${id}`);
    let response = await deleteDoc(dbInstance);
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export async function FetchTokenIdByToken(token) {
  try {
    let dbInstance = collection(db, "tokens");
    let response = await getDocs(dbInstance);
    let data = [];
    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });
    let tokenData = data.filter(data => data.token === token);
    return tokenData[0].id;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }

}

export async function AddNewReview(data) {
  try {
    let dbInstance = collection(db, "reviews");
    let date = new Date();
    let formattedDate = `${date.getFullYear()}-${
      AddZero(date.getMonth() + 1)
    }-${AddZero(date.getDate())}`;
    let response = await addDoc(dbInstance, {
      name: data.name,
      email: data.email,
      rating: data.rating,
      review: data.review,
      createdAt: formattedDate,
      token: data.token,
      type: data.type
    });

    dbInstance = collection(db, "tokens");
    let tokenId = await FetchTokenIdByToken(data.token);
    response = await updateDoc(doc(db, `tokens/${tokenId}`), {
      review: data.review,
      rating: data.rating
    });

    return true;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function FetchReviews() {
  try {
    let dbInstance = collection(db, "reviews");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function FetchReviewByToken(token) {
  try {
    let dbInstance = collection(db, "reviews");
    let response = await getDocs(dbInstance);
    let data = [];
    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });
    data = data.filter(data => data.token === token);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function CheckIfTokensHaveReview(tokens) {
  let data = tokens
  for (let i = 0; i < data.length; i++) {
    let reviewData = await FetchReviewByToken(data[i].token);
    data[i].hasBeenReviewed = reviewData.length > 0
  }
  return data;
}

export async function FetchTokens(){
  try {
    let dbInstance = collection(db, "tokens");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(async(doc) => {
      let token = doc.data().token;
      data.push({ ...doc.data(), id: doc.id});
    });

    data = await CheckIfTokensHaveReview(data)

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
} 

export async function AddToken(name, email, token){
  try {
    let dbInstance = collection(db, "tokens");
    let response = await addDoc(dbInstance, {
      token: token,
      name: name,
      email: email
    });

    return true;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function DeleteToken(id) {
  try {
    let dbInstance = doc(db, `tokens/${id}`);
    let response = await deleteDoc(dbInstance);
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export async function IsReviewValid(token) {
  try {
    let dbInstance = collection(db, "tokens");
    let response = await getDocs(dbInstance);
    let data = [];
    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });
    let tokenData = data.filter(data => data.token === token);
    let reviews = await FetchReviews();
    let reviewData = reviews.filter(data => data.token === token);
    if (tokenData.length > 0 && reviewData.length === 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getGalleryImages() {
  try {
    const storageMod = await import("firebase/storage");
    const { ref, listAll, getDownloadURL } = storageMod;

    const galleryRef = ref(storage, "gallery_compressed");
    const listResult = await listAll(galleryRef);

    const urls = await Promise.all(
      listResult.items.map(itemRef => getDownloadURL(itemRef))
    );

    return urls;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}