import { Col, Row } from "react-bootstrap"
import { ProductItem } from "../components/ProductItem"
import storeItems from "../data/items.json"
import { useNavigate, useParams } from "react-router-dom";


export function Store() {
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate("/productdetails" );
  };

  
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id} onClick={handleProductDetails}>
            <ProductItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
