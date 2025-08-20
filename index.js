const exp = require('express'); 
const app = exp();              
const mongoose = require('mongoose'); 
const cors = require('cors');         

const path = require('path');
const productRoutes = require('./routes/productRoutes');

app.use(exp.static(path.join(__dirname, 'views')));
app.use('/products', productRoutes);
app.use(cors());
app.use(exp.json());

app.get('/', (req, res) => {
  res.send('Ecommerce Express API is running');
});

const port = 5000;

app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
});