const express = require('express')
const router = require('./router/root.router');
const app = express();
const port = 3000;

//chuyen req,res về  dang json
app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const { sequelize } = require("./model");
sequelize.sync({ force: true });