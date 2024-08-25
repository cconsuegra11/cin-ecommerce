const { 
  getAllImg, 
  uploadImg, 
  deleteImg 
} = require('../controllers/productImg.controllers');
const express = require('express');
const upload = require('../utils/uploadFiles');

const routerProductImg = express.Router();

routerProductImg.route('/')
  .get(getAllImg)
  .post(upload.single('image'), uploadImg)

routerProductImg.route('/:id')
  .delete(deleteImg)

module.exports = routerProductImg;