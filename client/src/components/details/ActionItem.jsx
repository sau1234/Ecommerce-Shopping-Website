
import { Box, Button, styled } from '@mui/material';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPatym } from '../../service/api';
import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({theme}) =>({
   minWidth: '40%',
   padding: '40px 0 0 80px',
   [theme.breakpoints.down('md')]: {
      padding: '20px 40px'
   }
}));

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
})

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #FFF;
`



const ActionItem = ({ product }) => {
     const navigate = useNavigate();
     const { id } = product;
     const [quantity, setQuantity] = useState(1);
     const dispatch = useDispatch();
     
    const addItemToCart = () =>{
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    };
    const buyNow = async() =>{
       let response =  await payUsingPatym({amount: 500, email:'palsaurabh1607@gmail.com'});
       let information = {
         action:'https://securegw-stage.paytm.in/order/process',
         params: response,
       };
       post(information);
    }
  return (
    <LeftContainer>
        <Image src={product.detailUrl} alt='product' />      
        <StyledButton variant='contained' style={{marginRight: 10, background:'#ff9f00'}}
         onClick={() => addItemToCart()}
         > <Cart/>Add to Cart</StyledButton>
        <StyledButton variant='contained' onClick={()=> buyNow()} style={{background: '#fb541b'}}> <Flash/> Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem