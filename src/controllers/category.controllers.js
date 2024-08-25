const catchError = require('../utils/catchError');
const Category = require('../models/Category');

const getAll = catchError(async(req, res) => {
  const categories = await Category.findAll()
  return res.json(categories)
})

const create = catchError(async(req, res) => {
  const category = await Category.create(req.body)
  return res.status(201).json(category)
})

const remove = catchError(async(req, res) => {
  const { id } = req.params
  const deleteCategory = await Category.destroy({ where: {id} })
  if(!deleteCategory) return res.sendStatus(404)
  return res.sendStatus(204)
})


module.exports = {
  getAll,
  create,
  remove
}