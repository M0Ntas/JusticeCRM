const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    //пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // мы должны сгенерировать токен, пароли совпали
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id,
      }, keys.jwt, {expiresIn: 60 * 60})

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      res.status(401).json({
        //Пароли не совпали
        massage: 'Password mismatch. Try again.'
      })
    }
  } else {
    //пользователя нет
    res.status(404).json({
      massage: 'User with this email was not found.'
    })
  }
}

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email})
  if (candidate) {
    //пользователь существует, нужно дать ошибку
    res.status(409).json({
      massage: 'This email is already taken. Try another.'
    })
  } else {
    //создать пользователя
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    })
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      // Обработать ошибку
    }
  }
}