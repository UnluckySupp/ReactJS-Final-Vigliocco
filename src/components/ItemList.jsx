import { Link } from "react-router-dom";

export const ItemList = ({ array }) => {
  return (
    <div className="products">
      {array.map((iterator) => (
        <div key={iterator.id}>
          <img className="imgDetail" src={iterator.image}></img>
          <h3 className="">{iterator.name}</h3>
          <h3 className="">${iterator.price}</h3>
          <Link to={`/item/${iterator.id}`}>
            <button className="buttonCards">Ver Detalles</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
