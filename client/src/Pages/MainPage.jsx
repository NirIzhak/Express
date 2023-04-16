import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import StoreCard from '../Components/StoreCard';

export default function MainPage() {
    const {stores} = useContext(StoreContext);
  return (
    <>
    <h1 className='title'>Express Stores</h1>
    <div className='stores'>
        {stores.map((s)=> <StoreCard key={s.storeId} {...s} />)}
    </div>
    </>
  )
}
