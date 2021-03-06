/**
 * Level.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 module.exports = {
     schema: true,

     attributes: {

       value: {
           type: 'string',
           unique: true,
           required: true,
       },

       sportLists: {
         collection: 'sportList',
         via: 'level'
       },

       event: {
         collection: 'event',
         via: 'level'
       }
     }

 };
