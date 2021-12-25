import React from "react";
import './style.css';

const Item = ({ id, type, img, price, deleteItem, toggleUpdateModal, addToCart }) => {
  return (
    <div className="shoe-container">
      <div className="shoe-type">{type}</div>
      <div className="shoe-img">
        <img src={img} alt={type} />
      </div>
      <div className="shoe-btns">
        <button onClick={() => deleteItem(id)}>
          <span aria-label="trash" role="img">
            🗑️
          </span>
        </button>
        <button onClick={() => toggleUpdateModal(id)}>
          <span aria-label="pencil" role="img">
            ✏️
          </span>
        </button>
        <button onClick={() => addToCart()} className="cart">
            Add To Cart
        </button>
        <span className="price" style={{fontWeight: 'bolder'}}>Price: {price}</span>
      </div>
    </div>
  );
};
export default Item;
