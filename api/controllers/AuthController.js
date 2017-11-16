/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var passport = require ('passport');

function onPassportAuth(req, res, error, user, info)
{
    if (error) return res.serverError(error);
    if (!user) return res.serverError(error);

    return res.ok (
        {
            token : SecurityService.createToken(user),
            user:user
        }
    )
}

function signin(req, res) {
  passport.authenticate('local',
  onPassportAuth.bind(this,req,res))(req,res);
}

function signup(req, res) {
  User.create(
     req.allParams()
   ).exec(function (err, newUser) {
     newUser.token = SecurityService.createToken(newUser)
     res.ok(newUser)
   })
}

module.exports = { signin, signup };
