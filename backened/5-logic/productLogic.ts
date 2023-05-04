import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import CategoryModel from "../4-models/categoryModel"
import ProductModel from "../4-models/productModel"
import { ResourceNotFoundErrorModel } from "../4-models/errorModel"

async function getAllCategories() :Promise <CategoryModel[]> {
    const sql = `SELECT * from categories`
  const categories = await dal.execute(sql)
  return categories
}

async function getProductByCategory(categoryId:number) :Promise <ProductModel[]> {
const sql= `
SELECT P.*,C.categoryName 
FROM products AS P  JOIN categories AS C
 ON P.productCategoryId = C.categoryId
WHERE P.productCategoryId = ?
`;
  const productsByCategory = await dal.execute(sql,[categoryId])
  return productsByCategory
}
async function addProduct(product:ProductModel):Promise <ProductModel> {
  const sql = `
  INSERT INTO products 
  VALUES (  DEFAULT,
     ?,
     ?,
     ?,
     ?,
     ?
     )`;
 
     const info:OkPacket = await dal.execute(sql,[product.productName,product.manufacturingDate,product.expireDate,product.productCategoryId,product.price])
     
     product.productId = info.insertId

     return product

}

async function deleteProduct (productId:number):Promise<void>
{ 
  const sql =`DELETE FROM products WHERE products.productId = ?;`
  
  const info:OkPacket =await dal.execute(sql,[productId])
  if(info.affectedRows ===0) throw new ResourceNotFoundErrorModel(productId)
}

async function updateProduct (product:ProductModel):Promise<ProductModel>{
     const sql=`UPDATE products SET
      productName = ?,
      manufacturingDate = ?,
      expireDate=?,
      productCategoryId=?,
      price=?
      WHERE productId =?
     `
     const info:OkPacket = await dal.execute(sql,[product.productName,product.manufacturingDate,product.expireDate,product.productCategoryId,product.price,product.productId])
    if(info.affectedRows===0) throw new ResourceNotFoundErrorModel(product.productId)
     return product
} 
export default {
    getAllCategories,
    getProductByCategory,
    addProduct,
    deleteProduct,
    updateProduct
}