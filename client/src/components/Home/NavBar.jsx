import React from 'react'

import { navData } from '../../constants/Data'
import { Box, Typography, styled} from '@mui/material';

const Component = styled(Box)(({theme}) =>({
  display: 'flex',
  margin: '55px 130px 0 130px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
     margin : 0,
  }
}));

const Container = styled(Box)`
   padding: 12px 8px;
   text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;




const NavBar = () => {
  return (
      <Box style={{background: '#fff'}}>
       <Component>
          {
            navData?.map((data,index) =>(
                <Container key={index}>
                   <img src={data.url} alt="" style={{width: 64}} />
                   <Text>{data.text}</Text>  
                </Container>
            ))
          }
       </Component>
      </Box>
  )
}

export default NavBar