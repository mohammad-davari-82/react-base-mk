import React from "react";
import Button from "../../Button/Button";
const ProductItem = ({item}) => (
        <div key={item.id} className="card shadow-sm rounded" style={{width: "17rem" ,margin:" 10px"}}>
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body m-auto">
                <h5 className="card-title ">{item.name}</h5>
                <div className=" m-auto text-center">Price: {item.price}</div>
                <br/>
                <Button className="d-flex justify-content-center m-auto  btn btn-success">Add to Cart</Button>
            </div>
        </div>
    
);
export default ProductItem;
