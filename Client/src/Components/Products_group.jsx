import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { popularProduct } from "../data"
import { mobileL, mobileM, mobileS } from "../responsive.js"
import Product from "./Product"

const Container = styled.div`
  display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: space-around;
width: 90%;
${mobileS({    flexDirection: "column",flexWrap: "wrap", width: "100%" })};
  ${mobileL({ position: "relative", display: "block" ,  width: "100%" , top:"2200px" , justifyContent: "center"})};
  ${mobileM({    display: "block" ,flexWrap: "wrap", width: "100%"  })};

 `
const Products_group = ({ cat, filter, sort }) => {  //products
  const [products, setProducts] = useState([])
  const [fillterproducts, setFillterProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:3000/api/v1/product/getAllProducts?category=${cat}`
          : `http://localhost:3000/api/v1/product/getAllProducts`)
        setProducts(res.data);
      } catch (error) {

      }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    const productsList = products.products;

    if (cat && products) {
      setFillterProducts(
        products.filter(item =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, cat, filter]);      //


  useEffect(() => {
    const sortProducts = (prev) => {
      switch (sort) {
        case "newest":
          return [...prev].sort((a, b) => a.createdAt - b.createdAt);
        case "asc":
          return [...prev].sort((a, b) => a.price - b.price);
        case "desc":
          return [...prev].sort((a, b) => b.price - a.price);
        default:
          return prev;
      }
    };

    setFillterProducts(sortProducts);
  }, [sort]);
  return (
    <>

      
      <Container>

        {cat
          ? fillterproducts.map((item) => (<Product item={item} key={item.id} />)) //هذا عنا كاتيغوري
          : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />) //  اذا  ما كان عنا كاتيغوري يعني بالصفحة الرئيسية
        }
      </Container>
    </>
  )
}

export default Products_group

