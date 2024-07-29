import {Products} from "../Models/Product.js";


export const addProduct = async (req,res) =>{
    const { title, description, price,category,qty,imgSrc} = req.body;
    try{
          let product = await Products.create({
            title,
            description,
            price,
            category,
            qty,
            imgSrc,
          });
          res.json({message: 'Product added Successfully...!',product})

    }catch(error){
        res.json(error.message);
    }
}

export const getProducts = async(req,res) =>{
   let products = await Products.find().sort({createdAt:-1})
   res.json({message:'All Products',products})
} 


export const getProductById = async(req,res) =>{
   const id = req.params.id;
   let product = await Products.findById(id);
   if(!product) res.json({message:'Invalid Id'})
   res.json({message:"Specific Products ",product});
}

export const updateProductByID = async(req,res) =>{
   const id = req.params.id;
   let product = await Products.findByIdAndUpdate(id,req.body,{new : true});
   if(!product) res.json({message:'Invalid Id'})
   res.json({message:"Products has been Updated",product});
}

export const deleteProductByID = async(req,res) =>{
  const id = req.params.id;
  let product = await Products.findByIdAndDelete(id);
  if(!product) res.json({message:'Invalid Id'})
  res.json({message:"Products has been Deleted",product});
}