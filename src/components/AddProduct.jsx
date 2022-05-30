import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
   Button, 
   Modal, 
   ModalBody, 
   Input, 
   Select, 
   RadioGroup, 
   Radio ,
} from '@chakra-ui/react'

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  const [newpro, setNewPro] = useState("");
  const [limit,setLimit] = useState(3);
  const [page,setPage] = useState(1);
  const [products,setProducts] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((res)=>{
        setProducts(res.data)
    })
  
   
  }, [page])

  return (
    <>
      <Button my={4} data-cy="add-product-button">Add Product</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
