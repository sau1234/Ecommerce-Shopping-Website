import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';

import { Box, styled } from '@mui/material';

import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import MidSection from './MidSection';

const Container = styled(Box)`
 padding:10px;
 background: #F2F2F2; 
`;

const Home = () => {
  //  const getProducts = useSelector(state => state.getProducts);
  //  const { products } = getProducts;
  //  getProducts.products;      // both are same i.e the above line
  const { products } = useSelector(state => state.getProducts);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(getProducts()); 
  }, [dispatch]);

  return (
    <>
        <NavBar/>
        <Container>
           <Banner/> 
           <MidSlide products={products} title='Deal of the Day' timer={true}/>
           <MidSection/>
           <Slide products={products} title='Discounts for you' timer={false} />
           <Slide products={products} title='Suggesting Items' timer={false}/>
           <Slide products={products} title='Top Selection' timer={false} />  
           <Slide products={products} title='Recommended Items'  timer={false}/>
           <Slide products={products} title='Trending Offers'timer={false} />
           <Slide products={products} title='Seasons Top Picks' timer={false}/>
           <Slide products={products} title='Top Deals on Accessories' timer={false}/>

        </Container>
    </>
  )
}

export default Home