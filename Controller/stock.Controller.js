const productModel = require('../models/stock.model');
const ProductModel = require('../models/stock.model'); 

const create = async (req, res, next) => { 
    try {
        
        const newProduct = new StockModel(req.body);
        const savedProduct = await newProduct.save();
        
        console.log(savedProduct);

        res.status(201).json({
            message: 'Product created',
            product: savedProduct
        })
    } catch (error) {
        res.status(500).send("Failed to save!!");
    }
}

const update = async (req, res, next) => { 
    
}

const remove = async (req, res, next) => { 
    
}

const findById = async (req, res, next) => { 
    
}

const list = async (req, res, next) => { 
    
}

const findByEmail = async (req, res, next) => { 
    
}

module.exports = {
    create, update, remove, findById, list, findByEmail
}