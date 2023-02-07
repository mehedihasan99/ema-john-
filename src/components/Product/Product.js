import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = ({ handleCard, product }) => {
  const { name, img, price, quantity, seller, shipping, ratings } = product;
  return (
    <div className="product">
      <img className="product-img" src={img ? img : "no"} alt="" />
      <div className="product-info">
        <div>
          <h6 className="product-name">{name.slice(0, 20)}</h6>
          <p className="product-price">Price: ${price}</p>
        </div>
        <div className="seller-part">
          <p className="seller">Manufacturer: {seller}</p>
          <p className="ratting">Rating: {ratings} star</p>
        </div>
      </div>
      <button onClick={() => handleCard(product)} className="product-btn">
        Add to Card
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
