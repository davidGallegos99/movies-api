require('dotenv').config();
const express = require('express');
const api = require('./routes/routes.js');
const app = express();
const PORT = process.env.PORT || 4000;



app.use(express.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER'
    );
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
       
    next();
});

app.use("/api",api);
app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`))