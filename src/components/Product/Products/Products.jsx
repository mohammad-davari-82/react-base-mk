import "./Product.css";
import axios from "axios";
import React,{useState,useEffect} from "react";
import ProductItem from "../ProductItem/ProductItem"

const Products = () => {
    useEffect(() => {
        getData()
    }, [])
    const[products, setProducts] = useState([])
    const getData = () => {
        axios.get(`http://localhost:8000/prodcts`)
        .then((response) => setProducts(response.data))
    }
    return(
        <>
        <div  className="row justify-content-center">
                {products.map((item)=>( 
                    <ProductItem item={item}/>
                ))}
        </div>
        </>
    );
    
}
export default Products;