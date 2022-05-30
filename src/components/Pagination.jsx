import React, { useEffect, useState } from "react";
import {
   Button,
   ButtonGroup,
   Select
} from '@chakra-ui/react'
import axios from "axios";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const [limit,setLimit] = useState(3);
  const [page,setPage] = useState(1);
  const [products,setProducts] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((res)=>{
        setProducts(res.data)
    })
  
   
  }, [page])
  

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"  onClick={()=>setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>setPage(page-1)}>Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">{3}</option>
        <option data-cy="pagination-limit-6">{6}</option>
        <option data-cy="pagination-limit-9">{9}</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setPage(page+1)}>Next</Button>
      <Button data-cy="pagination-last-button"  onClick={()=>setPage(9)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
