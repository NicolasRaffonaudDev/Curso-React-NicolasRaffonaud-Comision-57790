import React from 'react'

const ItemList = ({products}) => {
  return (
    <div>
        {products.map (prod => {
            return <p key={prod.id}>{prod.name}</p>
        })}    
    </div>
  )
}

export default ItemList