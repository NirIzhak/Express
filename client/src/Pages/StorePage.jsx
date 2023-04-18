import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import ItemCard from "../Components/ItemCard";
import { useNavigate } from "react-router-dom";

export default function StorePage() {
  const { storeId } = useParams();
  const { LoadCurrentStore, currentStore, AddNewItem } =
    useContext(StoreContext);
  const itemNameRef = useRef("");
  const idRef = useRef(null);
  const priceAfterRef = useRef(null);
  const priceBeforeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    LoadCurrentStore(storeId);
  }, [currentStore.items]);

  if (!currentStore) {
    return <div>Loading...</div>;
  }

  const ClearInputs = () => {
    itemNameRef.current.value = "";
    idRef.current.value = null;
    priceBeforeRef.current.value = null;
    priceAfterRef.current.value = null;
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBlock: "15px" }}>
        {currentStore.storeName}
      </h1>
      <p style={{ textAlign: "center" }}>{currentStore.city}</p>
      <p style={{ textAlign: "center" }}>Store ID: {currentStore.storeId}</p>
      <div className="items" style={{ marginBlock: "15px" }}>
        {currentStore.items ? (
          currentStore.items.map((item) => <ItemCard key={item.id} {...item} />)
        ) : (
          <div>Loading</div>
        )}
      </div>
      <h2 className="title">Add New Item:</h2>
      <div className="add-new-item">
        <p>ID:</p>
        <input type="text" placeholder="Id" ref={idRef} />
        <p>Item Name:</p>
        <input type="text" placeholder="Name" ref={itemNameRef} />
        <p>Price Before Sale:</p>
        <input
          type="text"
          placeholder="Price Before Sale"
          ref={priceBeforeRef}
        />
        <p>Price After Sale:</p>
        <input type="text" placeholder="Price After Sale" ref={priceAfterRef} />
        <button
          onClick={() => {
            if (
              itemNameRef != "" &&
              idRef != null &&
              priceBeforeRef != null &&
              priceAfterRef != null
            ) {
              AddNewItem(
                itemNameRef.current.value,
                +idRef.current.value,
                +priceBeforeRef.current.value,
                +priceAfterRef.current.value,
                storeId
              );
              alert("Item Added");
              ClearInputs();
            } else {
              alert("Some Details Are Missing...");
            }
          }}
        >
          Add Item!
        </button>
        <button
          style={{ marginBlock: 15 }}
          onClick={() => {
            navigate(`/`);
          }}
        >
          Return To Main
        </button>
      </div>
    </div>
  );
}
