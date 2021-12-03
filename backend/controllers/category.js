const Category = require('../models/Category')
const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find({user: req.user.id})
    res.status(200).json(categories)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getByID = async (req, res) => {
  try {
    const categories = await Category.findById(req.params.id)
    res.status(200).json(categories)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Category.remove({_id: req.params.id})
    await Position.remove({category: req.params.id})
    res.status(200).json({
      message: 'Category delete'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
console.log('====>req.user<====', req.body)
  const category = new Category({
    store: req.body.store,
    price: req.body.price,
    productName: req.body.productName,
    quantityOfGoods: req.body.quantityOfGoods,
    weightOfItem:req.body.weightOfItem,
    date: req.body.date,
    user: req.user.id,
  })
  try {
    await category.save()
    res.status(201).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async (req, res) => {
  const updated = {
    name: req.body.name
  }
  if (req.file) {
    updated.imageSrc = req.file.path
  }

  try {
    const category = await Category.findOneAndUpdate(
      {id: req.params.id},
      {$set: updated},
    {new: true}
    )
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}