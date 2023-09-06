
// import * as React from 'react';
import IconButton from '@mui/material/IconButton';
// import { bo} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import { red } from '@mui/material/colors';
import styled from 'styled-components'

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText( red[500],),
//   backgroundColor: red[500],
//   '&:hover': {
//     backgroundColor: red[500],
//   },

// }));

const CartCounterButton = styled.div`
background-color: red;
border-radius: 50%;
display: flex;
justify-content: center;
width: 1.5rem;
height: 1.5rem;
`

  export function CartCounter(){
    return <>
    <IconButton color="inherit">
      <ShoppingCartIcon  />
    </IconButton>
    {/* <CartCounterButton> 1 </CartCounterButton> */}
    
    </>
 
}