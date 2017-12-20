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

       city: {
         type: 'string'
       },

       owner: {
         model: 'user'
       },

       sport: {
         model: 'sport',
       },

       date : {
         type: 'date',
         required: true,
       },

       hour : {
         type: 'int',
         required: true,
       },

       minutes : {
          type: 'int',
          required: true,
       },

       level: {
         model: 'level',
       },

       status: {
         model: 'status',
       },

       participants : {
         collection : 'group',
         via : 'event'
      }
     }

 };
