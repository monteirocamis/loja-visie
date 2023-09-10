// import * as C from './styles';
import { Container } from 'react-bootstrap';
import { Item } from '../types/price';
import { useState } from 'react';
import styled from 'styled-components';
import { formatCurrency } from "../utilities/formatCurrency";
import { ProductItem } from './ProductItem';

const Lined = styled.div`
p{
  text-decoration: line-through;
}
`

export const ListItem = () =>{

    return (
      <Lined>
          {/* <p className="ms-2 text-muted lined">
            {formatCurrency(price)}
            </p> 
            <p className=""> {formatCurrency( price - discount)} </p> */}

      </Lined>
    )

}