import Item from "../Item/Item"
import { memo } from "react"

// eslint-disable-next-line react-refresh/only-export-components
const ItemList = ({products}) => {
  console.log("me redibuje")
  return (
    <div>
        {products.map (product => <Item product={product} key={product.id} />)}    
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ItemList)