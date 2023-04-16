import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext';
import ItemCard from '../Components/ItemCard';

export default function StorePage() {
  const {storeId} = useParams();
  const {LoadCurrentStore, currentStore} = useContext(StoreContext);

  
  useEffect(() => {
    LoadCurrentStore(storeId);
  }, []);

  if (!currentStore) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{textAlign: 'center', marginBlock: '15px'}}>{currentStore.storeName}</h1>
      <p style={{textAlign: 'center'}}>{currentStore.city}</p>
      <p style={{textAlign: 'center'}}>Store ID: {currentStore.storeId}</p>
      <div className='items' style={{marginBlock: '15px'}}>
        {currentStore.items ? (
          currentStore.items.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}