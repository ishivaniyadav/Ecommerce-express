const { buyProduct } = require('../service/buyProductService'); 
const buyProductController = async (req, res) => {
    try {
        const productId = req.params.id;
        const result = await buyProduct(productId, userId);

        res.status(200).json(result); 
    } catch (error) {
        console.error('Error in buyProduct:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { buyProductController };