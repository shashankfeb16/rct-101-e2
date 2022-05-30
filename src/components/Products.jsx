import React from "react";
import { useEffect, useState } from "react";
  import{
    Flex,
    Grid
  } from '@chakra-ui/react'
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import axios from 'axios'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
 
  const [newpro, setNewPro] = useState("");
  const [limit,setLimit] = useState(6);
  const [page,setPage] = useState(1);
  const [products,setProducts] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((res)=>{
        setProducts(res.data)
    })
  
   
  }, [page])


  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct></AddProduct>
      <Grid>{/* List of Products */}
        <Product products={products}></Product></Grid>
      {/* Pagination */}
      <Pagination page={page} limit={limit}></Pagination>
    </Flex>
  );
};

export default Products;
