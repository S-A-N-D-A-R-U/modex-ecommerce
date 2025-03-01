import productModel from "../models/productModel.js";
import {v2 as cloudinary} from 'cloudinary';

// function for add product
const addProduct = async (req, res) => {
try {
    const {name, price, description, category, subCategory, sizes, bestseller} = req.body;
    const image1 = req.files.image1[0]
    const image2 = req.files.image2[0]
    const image3 = req.files.image3[0]
    const image4 = req.files.image4[0]

    const images = [image1, image2, image3, image4].filter(image => image !== undefined)
    
    let imageUrls = await Promise.all(images.map(async image => {
        let result = await cloudinary.uploader.upload(image.path, {resource_type:'image'})
        return result.secure_url
    }))

    console.log(JSON.parse(sizes))
    const productData = {
        name,
        description,
        category,
        price: Number(price),
        subCategory,
        bestseller: bestseller === 'true' ? true : false,
        sizes: JSON.parse(sizes),
        images: imageUrls,
        date: Date.now()

    }
    
    const product = new productModel(productData)
    const createdProduct = await product.save()
    res.json({success: true, message: 'Product created successfully'})

} catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
}
}

// function for list product
const listProducts = async (req, res) => {
    try {
        const product = await productModel.find({});
        res.json({success: true, product})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// function for removing product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId)
        res.json({success: true, product})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
    
}

export {addProduct, listProducts, removeProduct, singleProduct}