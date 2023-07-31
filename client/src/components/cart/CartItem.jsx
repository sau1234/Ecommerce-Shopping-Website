import { Typography, styled, Box, Button } from '@mui/material';

import React from 'react'
import { addEllipsis } from '../../utils/common-utils';
import ButtonGroup from './ButtonGroup';

const Component = styled(Box)`
   border-top: 1px solid #f0f0f0;
   display: flex;
   background: #fff;
`;
const LeftComponent = styled(Box)`
   margin: 20px;
   display: flex;
   flex-direction: column;
`;

const SmallText = styled(Typography)`
   color: #878787;
   font-size: 14px;
   margin-top: 10px;
`;

const Remove = styled(Button)`
  color: #000;
  margin-top: 20px;
  font-weight: 600;
  font-size: 16px;

`

const CartItem = ({item, removeItemFromCart}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
   
  return (
      <Component>
        <LeftComponent>
           <img src={item.url} alt='product' style={{height: 110, width: 110}}/>
            <ButtonGroup/>
        </LeftComponent>
        <Box style={{margin: '20px'}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller: RetailNet
                <Box component='span'><img src={fassured} style={{width: 50, marginLeft: '10px'}}/> </Box>
            </SmallText>
            <Typography style={{margin: '20px 0'}}>
                <Box component='span' style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
        </Box>
      </Component>
  )
}

export default CartItem;