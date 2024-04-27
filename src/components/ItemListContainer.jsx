import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useRequest } from "../hooks/useRequest";

export const ItemListContainer = () => {
const { id } = useParams();
const { items } = useRequest(id);
  if(items.length === 0) {
    return (<h2>Loading...</h2>)
  }

  return (
    <div>
    <ItemList array={items}/>
    </div>
  );
};
