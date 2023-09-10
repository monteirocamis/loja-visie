import { Carousel , Row, Col, Container, Button } from "react-bootstrap";
import { ProductItem } from "../components/ProductItem"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "../components/CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"
import styled from 'styled-components'
import { BackIcon } from "../images/icons/arrow-left-square-fill";
import { useNavigate, useParams } from "react-router-dom";
interface ButtonProps{
  navigate: string;
}

const ContainerBack = styled.div`
display: flex;
justify-content: start;
align-items: flex-start;

`

const BackButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
color: var(--bg-primary);
font-size: 14px;
font-weight: 500;


background-color: transparent;
border: none;
cursor: pointer;
`

export function ProductDetails() {
  // const { closeCart, cartItems } = useShoppingCart()
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
};


  return (
<>
  
<ContainerBack>
  <BackButton onClick={handleBack}>
 <BackIcon />

    Voltar
    </BackButton>
</ContainerBack>
    <section> Informações do produto</section>






  {/* {cartItems.map(item => (
    <CartItem key={item.id} {...item} />
    ))}
     
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
              )} */}
 </>

  )
}
