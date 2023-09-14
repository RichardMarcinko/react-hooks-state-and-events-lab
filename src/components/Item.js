import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const cartStatus = isInCart ? "in-cart" : ""
  const cartClick = (e) => setIsInCart((isInCart) => !isInCart)



  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartClick} className="add">{isInCart ? "Add Item" : "Remove Item"}</button>
    </li>
  );
}

export default Item;