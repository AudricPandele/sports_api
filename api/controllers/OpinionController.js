/**
 * OpinionController
 *
 * @description :: Server-side logic for managing Opinions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

async function getOpinionForUser(req, res){
	const opinion = (await Opinion.find({ recipient: req.params.id })
		.populate('recipient')
		.populate('transmitter')
	)
	res.ok(opinion)
}

module.exports = {
	show: (req, res, next) => { getOpinionForUser(req, res).catch(next) }
};
