const { STRING, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../db');

const Place = db.define('place', {
    id: {
      primaryKey: true,
      type: UUID,
      defaultValue: UUIDV4,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  });
  
module.exports = Place;