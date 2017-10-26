/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  adapter: 'mysql',

  attributes: {
    id: {
        type: 'integer',
        unique: true,
        autoIncrement: true
    },
    provider: {
        type: 'string',
        unique: false,
        required: true,
    },
    uid: {
        type: 'string',
        unique: true,
        required: true,
    },
    name: {
        type: 'string',
        unique: false,
        required: true,
    },
    email: {
        type: 'string',
        unique: false,
        required: false,
    },
    firstname: {
        type: 'string',
        unique: false,
        required: true,
    },
    lastname: {
        type: 'string',
        unique: false,
        required: true,
    },
    birthday: {
        type: 'string',
        unique: false,
        required: false,
    },
    gender: {
        type: 'string',
        unique: false,
        required: false,
    },
    photo: {
        type: 'string',
        unique: false,
        required: false,
    },
  }
};
