import React from "react";

import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel
} from '@chakra-ui/react'
import { useState, useEffect } from "react";
import axios from 'axios'
import Pagination from "./Pagination";
const Product = ({products}) => {
  // TODO: Remove below const and instead import them from chakra
  // const [newpro, setNewPro] = useState("");
  // const [limit,setLimit] = useState(3);
  // const [page,setPage] = useState(1);

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((res)=>{
  //       setProducts(res.data)
  //   })
  
   
  // }, [page])



  return (
    <Stack data-cy="product">
      {products.map((pro) => {
       return <div>
          <Image data-cy="product-image" src={pro.imageSrc} />
          <Text data-cy="product-category">{pro.category}</Text>
          <Tag>
            <TagLabel data-cy="product-gender">{pro.gender}</TagLabel>
          </Tag>
          <Heading data-cy="product-title">{pro.title}</Heading>
          <Box data-cy="product-price">{pro.price}</Box>
        </div>
      })}
    </Stack>
  );
};

export default Product;
