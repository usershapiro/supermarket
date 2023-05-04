import { useForm } from "react-hook-form";
import "./EditProduct.css";
import { NavLink, useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productService from "../../../Services/ProductsService";

function EditProduct(): JSX.Element {

    const {handleSubmit , register} = useForm <ProductModel>();
    const navigate = useNavigate();

    async function send(product:ProductModel) {
        try {
            await productService.addProduct;
            alert("product has been updated")
            navigate("/products");
        }
        catch(err: any) {
            alert(err.message);
        }
    }
   


    return (
        <div className="EditProduct">
					<h1>you are welcomed to edit a product</h1>
                    <form onSubmit={handleSubmit(send)}>
                <label>productName:</label><br/>
                <input type="text" {...register("productName")} ></input><br/>

                <label>manufacturingDate:</label><br/>
                <input type="date" {...register("manufacturingDate")}></input><br/>

                <label>expireDate:</label><br/>
                <input  type="date" {...register("expireDate")}></input><br/>
{/* 
                <label>categoryName:</label><br/>
                <input type="text" {...register("categoryName")} ></input><br/> */}

                <label> productCategoryId: </label><br/>
                <input type="number"  {...register("productCategoryId")}></input><br/>

                <label> price: </label><br/>
                <input type="number"   {...register("price")}></input><br/>
                 
                 <button>Add</button>

            </form>
              <NavLink to={"/home"}><span>Edit</span></NavLink>   




        </div>
    );
}

export default EditProduct;
