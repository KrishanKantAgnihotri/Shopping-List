const express = require('express');
const router = express.Router();

//item model

const Item = require("../../models/Item");

//@route GET api/items
//@desc  GET ALL ITEMS
//@Acess public
router.get('/',(req,res)=>{
    Item.find()
    .sort({date : -1})
    .then(items => res.json(items))
});

//@route POST at  api/items
//@desc  POST ITEMS
//@Acess public
router.post('/',(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });
    newItem.save().then(item=> res.json(item));
});

//@route DELETE at  api/items/:id
//@desc  DELETE ITEMS
//@Acess public
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(() => res.json({success : true}) ))
    .catch(err=> res.status(404).json({success:false}))
});
module.exports =  router;