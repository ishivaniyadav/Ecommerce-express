const { buyProduct } = require('../service/buyProductService'); 
// Controller to handle buy product request
const buyProductController = async (req, res) => {
    try {
        const productId = req.params.id;
       // const userId = req.user ? req.user.id : null; // If you have authentication, get userId

        // Await the service call and handle the result
        const result = await buyProduct(productId, userId);

        res.status(200).json(result); // Send success response
    } catch (error) {
        console.error('Error in buyProduct:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { buyProductController };