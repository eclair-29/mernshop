const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

// route: GET /api/items
// desc: get all items from the DB
// access: public
router.get("/", (req, res) => {
    Item.find().then(items => res.json(items));
});

// route: POST /api/items
// desc: add an item from the DB
// access: public
router.post("/", (req, res) => {
    const item = new Item(req.body);

    item.save().then(item => res.json(item));
});

// route: DELETE /api/items/:id
// desc: delete an item from the DB
// access: public
router.delete("/:id", (req, res) => {
    Item.findByIdAndDelete({ _id: req.params.id }).then(item => res.json(item));
});

module.exports = router;
