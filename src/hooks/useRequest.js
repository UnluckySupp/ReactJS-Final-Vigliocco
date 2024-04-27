import { useState,useEffect } from "react";
import {
    getFirestore,
    getDocs,
    collection,
    query,
    where,
  } from "firebase/firestore";

export const useRequest = (id) => {
    const [items, setItems] = useState([]);

    useEffect (() => {
        const db = getFirestore();
        let referenceDoc;
    
        if (!id) referenceDoc = collection(db, "products")
        else {
          referenceDoc = query(collection(db, "products"), where("category", "==", id))
        }
        getDocs(referenceDoc).then((data) => {
          setItems(data.docs.map((iterator) => {
            return {id:iterator.id, ...iterator.data()}
          }))
        })
      },[id]);

      return {
        items
      }
}