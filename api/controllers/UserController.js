/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

async function getUserWithSportList(req, res) {
	const user = (await User.findOne({ id: req.params.id })
		.populate('events'))
	.toJSON()

	user.sportList = await SportList.find({ user: user.id })
		.populate('sport')
		.populate('level')

	user.events = await Event.find({ owner: user.id })
		.populate('sport')
		.populate('level')

	res.ok(user)
}

module.exports = {
	show: (req, res, next) => { getUserWithSportList(req, res).catch(next) }
};
