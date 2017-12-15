/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

async function getUserWithSportList(req, res) {
	const user = (await User.findOne({ id: req.params.id })
		.populate('events')
		.populate('friends'))
	.toJSON()

	user.sportList = await SportList.find({ user: user.id })
		.populate('sport')
		.populate('level')

	user.events = await Event.find({ owner: user.id })
		.populate('sport')
		.populate('level')
		.populate('status')


	res.ok(user)
}

async function getUserInterests(req, res) {
	const user = (await User.findOne({ id: req.params.id })
		.populate('events'))
	.toJSON()

	user.sportList = await SportList.find({ user: user.id })
		.populate('sport')
		.populate('level')

	let tmp = []
	for (var i = 0; i < user.sportList.length; i++) {
		let event = await Event.find({ sport: user.sportList[i].sport.id, level: user.sportList[i].level.id, city: req.params.city })
		tmp.push(event)
	}

	let events = []
	events = [].concat.apply([], tmp);

	let final = []
	for (var i = 0; i < events.length; i++) {
		let event = (await Event.findOne({ id: events[i].id}).populate('sport').populate('level').populate('owner')).toJSON()
		event.participants = await Group.find({event : event.id}).populate('user').populate('status')
		final.push(event)
	}

	res.ok(final)

}

module.exports = {
	show: (req, res, next) => { getUserWithSportList(req, res).catch(next) },
	interests: (req, res, next) => { getUserInterests(req, res).catch(next) }
};
