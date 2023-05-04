import Joi from "joi"

class ProductModel {
   public productId:number
   public productName:string	
   public manufacturingDate: string
   public expireDate: string	
   public productCategoryId	: number
   public price : number
   
   public constructor (product:ProductModel) {
    this.productId = product.productId;
    this.productName = product.productName;
    this.manufacturingDate = product.manufacturingDate;
    this.expireDate = product.expireDate;
    this.productCategoryId = product.productCategoryId;
    this.price = product.price
   }

   public static validationScheme = Joi.object({
      productId:Joi.number().optional().positive().integer(),
      productName:Joi.string().required().min(2).max(30),
      productPrice:Joi.number().required().integer()
   })
   public validate():string{
      const result = ProductModel.validationScheme.validate(this)
      return result.error?.message;
   }

} 

export default ProductModel