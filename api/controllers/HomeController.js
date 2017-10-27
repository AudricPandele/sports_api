/**
 * HomeController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

 function index(req, res) {
   res.view({
     user: req.user
   });
 }

module.exports = {index};
