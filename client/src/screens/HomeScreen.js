import React, { useEffect } from "react";
import productsa from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Message from '../components/Message'
// import axios from 'axios'
import Loader from '../components/Loader'

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Services</h1>
      {loading ? <Loader/>:error ? <Message variant='danger'>{error}</Message>:
      <Row>
        {products.map(product=>(
         <Col key={product._id} sm ={12} md ={6} lg ={4} xl = {3}>
  
          <Product product={product}/>
         </Col>
  
        ))}
      </Row>}
      
    </>
   )
  }

export default HomeScreen;
