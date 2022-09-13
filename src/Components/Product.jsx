
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

import React from 'react'
import styled from "styled-components";

const Container = styled.div`
padding: 20px;
display: flex;
margin: 5px;
flex-wrap: wrap;
justify-content: space-between;
`

const Product = () => {
  return (
   <Container>
    {popularProducts.map(item =>
        <ProductItem item={item} key={item.id}/>)}
   </Container>
  )
}

export default Product