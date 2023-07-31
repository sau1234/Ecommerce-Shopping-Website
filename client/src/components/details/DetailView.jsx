import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Typography, styled, Grid } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";


const Component = styled(Box)`
  background: #F2F2F2;
  margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  
  [theme.breakpoints.down('md')]: {
    margin: 0,
  }
}))


const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 40px;
  & > p {
    margin-top: 10px;
}
`

const DetailView = () => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      <Box></Box>
      {
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer lg={8} md={8} sm={8} xs={12} >
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
              8 Rating & 1 review
              <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></span>
            </Typography>
            <Typography>
              <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
              <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
              <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
            </Typography>
            <ProductDetails product={product} />
          </RightContainer>
        </Container>
      }

    </Component>

  )
}

export default DetailView;