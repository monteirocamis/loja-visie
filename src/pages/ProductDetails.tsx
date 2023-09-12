import { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { APIContextType, contextAPI } from "../context/AllProducts";
import { BackIcon } from "../images/icons/arrow-left-square-fill";
import * as C from "../styles";
import { formatCurrency } from "../utilities/formatCurrency";
import { fetchProductDetail } from "./actions";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function ProductDetails() {
  const { closeCart, cartItems } = useShoppingCart()
  const navigate = useNavigate();
  const pathParams = useParams();

  const handleBack = () => {
    navigate("/");
  };
  const { api, dispatch } = useContext<APIContextType>(contextAPI)!;
  useEffect(() => {
    fetchProductDetail({ dispatch, id: pathParams.id });
    console.log(api.productDetail);
  }, [fetchProductDetail, dispatch]);

  return (
    <>
      <C.ContainerBack>
        <C.BackButton onClick={handleBack}>
          <BackIcon />
          Voltar
        </C.BackButton>
      </C.ContainerBack>
      <C.CenteredContainer> 

      <section>
        <img />
        <div className="description">
          <h5 className=""> Descrição do produto</h5>
        </div>
      </section>

      <Card className="h-100">
        <Card.Img
          variant="top"
          src={api.productDetail?.thumbnail}
          height="200px"
          style={{ objectFit: "cover" }}
          />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <p className="fs-2">{api.productDetail?.title}</p>

            <img
              alt={"Icone"}
              // src={like} onClick={onClickCurtida}
              />
            <C.Lined className="lined">
              <p className="ms-2 text-muted ">{formatCurrency(api.productDetail?.price)}</p>
            </C.Lined>
            <p className="">
              {formatCurrency(api.productDetail?.price - (api.productDetail?.discountPercentage * api.productDetail?.price) / 100)}{" "}
            </p>
          </Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Subtitle className="mb-2 ">
              <strong>Marca:</strong>
              {api.productDetail?.brand}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 ">
              <strong>Reputação:</strong> {api.productDetail?.rating}
            </Card.Subtitle>
          </div>
          <Card.Text className="">
            <p className="fs-2">{api.productDetail?.description}</p>
          </Card.Text>
          <Card.Subtitle className="mb-2 ">
            {api.productDetail?.stock}
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
                </C.CenteredContainer>
    </>
  );
}
