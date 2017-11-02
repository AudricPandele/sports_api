/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,

    attributes: {
      // id: {
      //     type: 'integer',
      //     unique: true,
      //     autoIncrement: true,
      //     required: true,
      // },
      name: {
          type: 'string',
          unique: true,
          required: true,
      },
      email: {
          type: 'string',
          unique: false,
          required: false,
      },
      password: {
          type: 'string',
          required: true,
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

      sportList: {
        collection: 'sportList',
        via: 'user'
      },

      toJSON: function () {
          var obj = this.toObject();
          delete obj.password;
          delete obj.createdAt;
          delete obj.updatedAt;
          /*  delete obj.id;*/
          return obj;
      }
    },

    beforeCreate: function (values, next) {
        SecurityService.hashPassword(values);
        next();
    },
    beforeUpdate: function (values, next) {
        SecurityService.hashPassword(values);
        next();
    }

};
