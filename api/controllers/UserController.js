/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function getUserWithSportList(req, res) {
	User.findOne({ id: req.params.id })
		.populate('sportList')
		.then(function(man) {
			if (man.sportList.length > 0) {
					SportList.find({ user: man.id })
						.populate('sport')
						.populate('level')
						.then(function(list) {
							man.sportList = list
							res.ok({user: man})
					});
			}else{
				res.ok({user: man})
			}
  });
}

module.exports = { getUserWithSportList };
