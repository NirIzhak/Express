import React from 'react'
import {Link} from 'react-router-dom';



export default function StoreCard({storeName, city, items, storeId}) {
  return (
    <Link to={`/${storeId}`} style={{ textDecoration: 'none' }}>
    <div className='store-card'>
        <h2 className='store-name'>{storeName}</h2>
        <p className='store-city'>{city}</p>
        <p className='store-available-items'>Items Available: {items.length}</p>
    </div>
    </Link>
  )
}
