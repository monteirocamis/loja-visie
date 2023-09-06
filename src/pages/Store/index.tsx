// import { Button, Container } from "@mui/material";
// import { Col, Row } from "react-bootstrap";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import storeItems from '../../data/items.json'
import { ProductCard } from "../../components/ProductCard";

console.log(storeItems)
// const api = JSON.stringify(storeItems)

export function Store(){
    const navigate = useNavigate();

    return (
    <>

   <h1 className=""> Produtos disponíveis</h1>
  
    <Row>
{ storeItems.map(item => {
    return (
    <>
        <Col key={item.id}>
            <ProductCard {...item}/> 
      </Col>
    </>)
    })}
    
{/* <Col> 
{api}</Col> */}

    </Row>
    </>)
}