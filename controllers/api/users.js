require('dotenv').config()
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create(req, res, next) {
    try {
      const user = await User.create(req.body)
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string which we need to account for in the client
      res.locals.data.user = user
      res.locals.data.token = token
      next()
    } catch (e) {
      console.log('You got a database problem')
      res.status(400).json({ message: e.message })
    }
  },
  async login(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error()
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  },
  async update(req, res, next) {
    try {
      const user = await User.findOne({ _id: req.user._id })
      const updates = Object.keys(req.body)
      updates.forEach(update => user[update] = req.body[update])
      await user.save()
      // send back the token as a string which we need to account for in the client
      res.locals.data.user = user
      // create a new token containing the updated user data
      res.locals.data.token = createJWT(user)
      next()
    } catch (e) {
      res.status(400).json({ message: e.message })
    }
  }
}


const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* --------- Helper Functions ---------- */

function createJWT(user) {
  return jwt.sign(
    { user },
    SECRET,
    { expiresIn: '7d' }
  )
}