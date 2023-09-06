// import { Button, Container } from "@mui/material";
// import { Col, Row } from "react-bootstrap";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import {  getProductsRequest } from "../../hooks/UseProducts";
// import ProductCard from '../../components/ProductCard'

// const [dummyProduct, setdummyProduct] = useState(undefined);

// const getdummyProduct= () => {
//     getProductsRequest()
//     .then(product => {
//       setdummyProduct(product);
//     });
//   };

// useEffect(() => {
//     getdummyProduct();
//   }, []);


// export function Store(){
//     return  <>
//     <Container>
//             <Button variant="contained" href="/">Voltar</Button>
//     </Container>
        
//         <Container>
//             <h1> Produtos disponíveis </h1>
//         </Container>

 
//         <ProductCard product={dummyProduct}>
            
//         </ProductCard>
     
//     </>
// }