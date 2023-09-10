import { Carousel , Row, Col, Container } from "react-bootstrap";
import { ProductItem } from "../components/ProductItem"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "../components/CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function ProductDetails() {
  const { closeCart, cartItems } = useShoppingCart()

  return (
<>
  <h1> produto</h1>
  {cartItems.map(item => (
    <CartItem key={item.id} {...item} />
    ))}
     
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
              )}
 </>

  )
}
