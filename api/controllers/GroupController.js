/**
 * GroupController
 *
 * @description :: Server-side logic for managing Groups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 async function getGroupsOfUser(req,res){
	 const group = (await Group.find({ user:req.params.id })
	 .populate('event'))

	 for(let i = 0 ; i < group.length ; i++){
		 group[i].event = (await Event.findOne({ id:group[i].event.id })
		 .populate('sport')
		 .populate('owner'))
	 }




	 res.ok(group)
 }

module.exports = {
	show : (req,res,next) => {getGroupsOfUser(req,res).catch(next)}

};
