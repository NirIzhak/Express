import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemCard({ itemName, price, disPrice, id }) {
  const { storeId } = useParams();
  return (
    <Link
      to={`/${storeId}/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="item-card">
        <h3 className="item-name">{itemName}</h3>
        <div className="prices">
          <p className="item-price">{price}$</p>
          <p className="item-disprice">{disPrice}$</p>
        </div>
      </div>
    </Link>
  );
}
