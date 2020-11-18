const Users = require('./model.user');
const env = require('./DB');
const jwt = require('jsonwebtoken');

exports.register = function (req,res)
{
    const{username, email, password, passwordConfirmation, userStatus} = req.body
    if (!email || !password) 
    {
        return res.status(422).json({ 'error': 'Please provide email or password' })
      }
    
      if (password != passwordConfirmation) {
        return res.status(422).json({ 'error': 'Password does not match' })
      }
      Users.findOne({ email }, function (err, existingUser) {
        if (err) 
        {
          return res.status(422).json({ 'error': 'Fault' })
        }
        if (existingUser) 
        {
          return res.status(422).json({ 'error': 'User already exists' })
        }
        else 
        {
          const user = new Users({
            username, email, password, userStatus
          })
          user.save(function (err) {
            if (err) {
              return res.status(422).json({
                'error': 'Fault'
              })
            }
            return res.status(200).json({ 'registered': true })
          })
        }
      })
     }

     exports.login = function (req, res) 
     { 
        const { email, password } = req.body
      
        if (!email || !password) {
          return res.status(422).json({ 'error': 'Please provide email or password' })
        }
        Users.findOne({ email }, function (err, user) {
          if (err) {
            return res.status(422).json({
              'error': 'Fault1'
            })
          }
      
          if (!user) {
            return res.status(422).json({ 'error': 'Invalid user' })
          }
      
          if (user.hasSamePassword(password)) 
          {
            json_token = jwt.sign(
              {
                userId: user.id,
                username: user.username
              },
              env.secret,
              { expiresIn: '1h' })
      
            return res.json(json_token)
          }
          else {
            return res.status(422).json({ 'error': 'Invalid password. Please try again.' })
          }
        })
      }
      
      exports.authMiddleware = function (req, res, next) 
      {
        const json_token = req.headers.authorization
        try 
        {
          if (json_token) 
          {
            const user = parseToken(json_token)
            Users.findById(user.userId, function (err, user) 
            {
              if (err) {
                return res.status(422).json({
                  'error': 'Fault'
                })
              }
              if (user) {
                res.locals.user = user
                next()
              }
              else {
                return res.status(422).json({ 'error': 'Not authorized user' })
              }
            })
          }
          else {
            return res.status(422).json({ 'error': 'Not authorized user' })
          }
        } catch (err) 
        {
          res.status(403).json({
            success: false,
            message: err
          })
        }
      }
      
      function parseToken(token) {
        return jwt.verify(token.split(' ')[1], environment.secret)
      }