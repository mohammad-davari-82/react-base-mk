import React from "react";
import "./Product.css";
import ProductItem from "../ProductItem/ProductItem"

const Products = (props) => (
    <>
    <div  key={props.data.id} className="row justify-content-center">
            {props.data.map((item)=>( 
                <ProductItem item={item}/>
            ))}
    </div>
    <br/>
    <br/>
    <br/>
    <br/>

    </>
);
export default Products;