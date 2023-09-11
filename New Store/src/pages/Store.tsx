import { Col, Row } from "react-bootstrap"
import { ProductItem } from "../components/ProductItem"
import storeItems from "../data/items.json"
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { APIContextType, contextAPI } from "../context/AllProducts";
import { fetchProducts } from "./actions";


export function Store() {
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate("/productdetails" );
  };
  
  
  const { api, dispatch } = useContext<APIContextType>(contextAPI)!;
  
  useEffect(() => {
    fetchProducts( dispatch)
  }, [fetchProducts, dispatch]);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {api?.products?.products?.map((item : any) => (
          <Col key={item.id} >
            <ProductItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
