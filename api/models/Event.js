/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 module.exports = {
     schema: true,

     attributes: {

       name: {
           type: 'string',
           required: true,
       },

       description: {
         type: 'string',
       },

       number_of_participants: {
         type: 'integer',
       },

       place: {
         type: 'string'
       },

       owner: {
         model: 'user'
       },

       sport: {
         model: 'sport',
         unique: true
       },

       level: {
         model: 'level',
         unique: true
       },

       participants : {
         collection : 'group',
         via : 'event'
       }
     }

 };
