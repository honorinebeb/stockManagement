
const ProductModel = require('../models/stock.model'); 

const create = async (req, res, next) => { 
    try {
        
        const newProduct = new StockModel(req.body);
        const savedProduct = await newProduct.save();
        
        console.log(savedProduct);

        res.status(201).json({
            message: 'Product created successfully',
            product: savedProduct
        })
    } catch (error) {
        res.status(500).send("Failed to save product!!");
    }
};

let listStock = async (req, res, next) => {
    try {
        let stock=await ProductModel.find({});
        res.status(200).json(stock);

        
    } catch (error) {
        res.status(500).send('Failed to find stock products')
    }
}


module.exports ={
    create,
    listStock
}


