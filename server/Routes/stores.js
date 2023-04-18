const express = require('express');
const Data = require('../db/stores.json')
const stores = Data


const StoresRouter = express.Router();

// get all stores
StoresRouter.get('/', async (req, res) => {

    res.status(200).json(stores);
});


// get specific store
StoresRouter.get(`/:storeId`, async (req, res) => {
    let {
        storeId
    } = req.params;

    let store = stores.find((s) => s.storeId == storeId);

    if (store)
        res.status(200).json(store);
    else
        res.status(404).json({
            msg: "store not found"
        });
});


// get specific item from store
StoresRouter.get('/:storeId/:id', async (req, res) => {
    let {
        storeId,
        id
    } = req.params;
    let store = stores.find((s) => s.storeId == storeId);

    if (store) {
        let item = store.items.find((i) => i.id == id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({
                msg: "item not found"
            });
        }
    } else {
        res.status(404).json({
            msg: "store not found"
        });
    }
});


// add store
StoresRouter.post(`/add`, async (req, res) => {
    try {
        let {
            storeId,
            storeName,
            city,
            items
        } = req.body;


        let store = {
            storeId,
            storeName,
            city,
            items
        };

        stores.push(store);

        res.status(201).json(stores);

    } catch (error) {
        res.status(500).json({
            error
        });
    }
});


// add specific item to store
StoresRouter.post('/:storeId/items/add', async (req, res) => {
    let {
        storeId
    } = req.params;
    let {
        id,
        itemName,
        price,
        disPrice
    } = req.body;
    let storeObj = stores.find((s) => s.storeId == storeId);

    if (storeObj) {
        let item = storeObj.items.find((i) => i.id == id);

        if (item) {
            res.status(400).json({
                msg: "item with that ID already exists"
            });
        } else {
            let newItem = {
                id,
                itemName,
                price,
                disPrice
            };
            storeObj.items.push(newItem);
            res.status(201).json(newItem);
        }
    } else {
        res.status(404).json({
            msg: "store not found"
        });
    }
});




module.exports = StoresRouter;