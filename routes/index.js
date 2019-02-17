


'use strict'

const express = require('express')
const ProductCtrl  = require('../controller/product')
const userCtrl = require('../controller/user')
const auth = require ('../middlewares/auth')
const api = express.Router()

api.get('/product',ProductCtrl.getProducts)
api.get('/product/:productId', ProductCtrl.getProduct)
api.post('/product', auth ,ProductCtrl.saveProduct)
api.put('/product/:productId', auth, ProductCtrl.updateProducts)
api.delete('/product/:productId', auth, ProductCtrl.deleteProducts)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private',  auth, userCtrl.getUsers, (req, res) => {
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api