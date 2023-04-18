import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function AddNewStore() {
  const [storeName, setStoreName] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const { AddNewStore } = useContext(StoreContext);
  return (
    <div className="store-inputs">
      <h1 className="title">Add New Store</h1>
      <div className="store-inputs-field">
        <p>Store Name:</p>
        <input
          type="text"
          onChange={(e) => {
            setStoreName(e.target.value);
          }}
          placeholder="Name"
        />
        <p>City:</p>
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="City"
        />
        <p>ID:</p>
        <input
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="ID"
        />
      </div>
      <div className="button-style">
        <button
          onClick={() => {
            if (storeName != "" && city != "" && id != null) {
              AddNewStore(storeName, city, id);
              navigate(`/${id}`);
            } else {
              alert("Some Details Are Missing...");
            }
          }}
        >
          Add Store!
        </button>
        <button
          onClick={() => {
            navigate(`/`);
          }}
        >
          Back To Main
        </button>
      </div>
    </div>
  );
}
