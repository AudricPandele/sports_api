/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 async function getEventWithUser(req, res) {

	 const event = (await Event.findOne({ id: req.params.id}).populate('sport').populate('level').populate('owner')).toJSON()
	 event.participants = await Group.find({event : event.id}).populate('user').populate('status')
		 res.ok(event);

 }

module.exports = {
show: (req, res, next) => { getEventWithUser(req, res).catch(next)}
};
