/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function getUserWithSportList(req, res) {
	User.findOne({ id: req.params.id }).populate('sportList').exec(function(err, man) {
		if (man.sportList.length > 0) {
			for (var i = 0; i < man.sportList.length; i++) {
				SportList.findOne({ id: man.sportList[i].id }).populate('sport').populate('level').exec(function(err, list) {
					res.ok({user: {
						sportList: list,
						events: man.events,
						name: man.name,
						email: man.email,
						firstname: man.firstname,
						lastname: man.lastname,
						birthday: man.birthday,
						gender: man.gender,
						photo: man.photo,
						id: man.id,
					}})

				});
			}
		}else{
			res.ok({user: man})
		}
  });
}

module.exports = { getUserWithSportList };
