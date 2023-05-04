import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import "./ProductList.css";
import ProductsService from "../../../Services/ProductsService";
import { useState } from "react";


// const [product, setProduct] = useState<ProductModel>();
interface ProductProps{
    product:ProductModel
};

async function deleteProduct(productId:number){
    try{
        await ProductsService.deleteProduct(productId)
         alert("product has been deleted")
    }
    catch(err:any){
      alert(err.message)
    }

}

function ProductList(props: ProductProps): JSX.Element {
   
    return (

        <div className="ProductList">
			 <div className="container">
            <h1>{props.product.productName}</h1>
            <br/>
            <span>productId: {props.product.productId}</span><br/>
            <span>{props.product.categoryName}</span><br/>
            <span>manufacturingDate:{props.product.manufacturingDate}</span><br/>
            <span>expireDate:{props.product.expireDate}</span><br/>
            <span>price:{props.product.price}</span><br/>
            
            </div>    
            < NavLink to="/#" onClick={()=>deleteProduct(props.product.productId)}>delete!</NavLink>
        </div>
    );
}

export default ProductList;
