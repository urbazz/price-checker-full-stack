const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const options = {
    url: "http://localhost/wordpress/",
    consumerKey: "ck_09c8bae8cddb98d681214d098de61a36ee88d254",
    consumerSecret: "cs_65cd1bab9d0e17038ebd43b55c2f82c30e155835",
    version: "wc/v3"
};
let data = null;
const api = new WooCommerceRestApi(options);
 
app.use(cors())
app.listen(PORT, () => {
    app.get('/product/:sku', (req, res) => {
        api.get('products/', {
            per_page: 20,
            sku: req.params.sku
        }).then(response => {data = response.data;});
        res.send(data);
    });
});

