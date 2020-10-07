const { User } = require('../models/UserModels');
const { Activities } = require('../models/ActivitiesModels');

const matchesController = {};

// FINDING AN ACTIVITIES MATCH FOR THE USER BASED ON USER ID. 

matchesController.findMatchingUsers = async (req, res, next) => {
  console.log(`Requesting for user data`)
  const { userID } = req.params;

  try {
    const queryResult = await User.find(({_id: userID}))
    console.log(queryResult)
    res.locals.user = queryResult
  } catch (err) {
    console.log(err)
  }
  return next()
}

module.exports = matchesController;


// Query a user from the database with a given UserID
  //Expect: Access to the woof-users.preferred_activities Array.
    // To do: Loop through array to get access to keys
    //        Retrieve the list of activities in an array --> ['coffee', 'beach']

// Query the activities database
