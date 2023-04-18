import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import StoreCard from "../Components/StoreCard";
import { Link } from "react-router-dom";

export default function MainPage() {
  const { stores } = useContext(StoreContext);
  return (
    <>
      <h1 className="title">Express Stores</h1>
      <div className="stores">
        {stores.map((s) => (
          <StoreCard key={s.storeId} {...s} />
        ))}
      </div>
      <div className="button-style">
        <Link to={"/add"}>
          <button className="add-new-store">Add New Store</button>
        </Link>
      </div>
    </>
  );
}
