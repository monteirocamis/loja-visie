import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import { ShoppingCartProps} from '../types/cart'
import { useContext, useEffect } from "react"
import { fetchProducts } from "../pages/actions"
import { APIContextType, contextAPI } from "../context/AllProducts"



export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  const { api, dispatch } = useContext<APIContextType>(contextAPI)!;
  
  useEffect(() => {
    fetchProducts( dispatch)
  }, [fetchProducts, dispatch]);
  
  console.log(api?.products?.products)
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
        {/* 
   
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = api?.products?.products?.find(i => i.id === cartItem.id)
                return total + ( item?.price || 0) * cartItem.quantity
                //item.price - ((item.discountPercentage *  item.price) / 100) 
              }, 0)
      
            )}
          </div>
        */}
        </Stack> 
      </Offcanvas.Body>
    </Offcanvas>
  )
}
