import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext';

export default function ItemPage() {
    const {storeId, id} = useParams();
    const {LoadCurrentItem, currentItem} = useContext(StoreContext);

    useEffect(()=>{
      LoadCurrentItem(storeId, id)
    },[])


  return (
    <div>
      <h2>{currentItem.itemName}</h2>
      <p>Item ID: {currentItem.id}</p>
      <p>Price Before Discount: {currentItem.price}</p>
      <p>Price After Discount: {currentItem.disPrice}</p>
      </div>
  )
}
