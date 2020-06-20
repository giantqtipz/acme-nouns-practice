const { Person, Thing, Place } = require('./db/models');
const {db} = require('./db/db');

Person.belongsTo(Place);
Place.hasMany(Person);
Thing.belongsTo(Person);
Person.hasMany(Thing);

const seed = async (force = false) => {
  try {
    await db.sync({ force });
    console.log(`DB successfully connected, and synced. Force: ${force}`);
  } catch (e) {
    console.log('Error while connecting to database.');
    throw e;
  }
};

module.exports = {
  db,
  seed,
  Person,
  Place,
  Thing
};
