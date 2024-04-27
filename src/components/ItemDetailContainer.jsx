import {
    getFirestore,
    getDoc,
    doc
  } from "firebase/firestore";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { ItemDetail } from "./ItemDetail";
  import "../App.css"
  
  export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
  
    const { id } = useParams();
  
    useEffect (() => {
      const db = getFirestore();
        const ref = doc(db, "products", id)
      getDoc(ref).then((data) => {
        setItem({id:data.id, ...data.data()});     
    })},[id])

    if(item === null) {
      return (<h2>Loading...</h2>)
    }
  
    return (
      <div>
      <ItemDetail item={item} />
      </div>
    )
  };
