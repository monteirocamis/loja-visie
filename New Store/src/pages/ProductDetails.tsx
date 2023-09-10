import { Carousel, Row, Col, Card, Container, Button } from "react-bootstrap";
import { ProductItem } from "../components/ProductItem";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import styled from "styled-components";
import { BackIcon } from "../images/icons/arrow-left-square-fill";
import { useNavigate, useParams } from "react-router-dom";
import { ProductItemProps } from "../components/ProductItem";
import * as C from "../styles";

export function ProductDetails({
  id,
  title,
  price,
  thumbnail,
  brand,
  discountPercentage,
  description,
  rating,
  stock,
}: ProductItemProps) {
  // const { closeCart, cartItems } = useShoppingCart()
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <C.ContainerBack>
        <C.BackButton onClick={handleBack}>
          <BackIcon />
          Voltar
        </C.BackButton>
      </C.ContainerBack>

      <section>
        <img />
        <div className="description">
          <h5 className=""> Descrição do produto</h5>
        </div>
      </section>

      <Card className="h-100">
        <Card.Img
          variant="top"
          src={thumbnail}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <p className="fs-2">{title}</p>

            <img
              alt={"Icone"}
              // src={like} onClick={onClickCurtida}
            />
            <C.Lined className="lined">
              <p className="ms-2 text-muted ">{formatCurrency(price)}</p>
            </C.Lined>
            <p className="">
           
              {formatCurrency(price - (discountPercentage * price) / 100)}{" "}
            </p>
          </Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Subtitle className="mb-2 ">
              <strong>Marca:</strong>
              {brand}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 ">
              <strong>Reputação:</strong> {rating}
            </Card.Subtitle>
          </div>
          <Card.Text className="">
            <p className="fs-2">{description}</p>
          </Card.Text>
          <Card.Subtitle className="mb-2 ">
            {stock}
            <strong> em estoque</strong>
          </Card.Subtitle>

          <div className="mt-auto">
            {/* {quantity === 0 ? ( */}
            <Button
              className="w-100"
              // onClick={() => increaseCartQuantity(id)}
            >
              + Adicionar no Carinho
            </Button>
            {/* ) : ( */}
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                // onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <p className="fs-3">
                    {/* {quantity}  */}
                    qtd
                  </p>{" "}
                  no carrinho
                </div>
                <Button
                // onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                // onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remover
              </Button>
            </div>
            {/* )} */}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
