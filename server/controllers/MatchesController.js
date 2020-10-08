const User = require('../models/UserModels');
const Activities  = require('../models/ActivitiesModels');

const matchesController = {};

// FINDING AN ACTIVITIES MATCH FOR THE USER BASED ON USER ID. 

matchesController.userActivities = (req, res, next) => {
  console.log(`Requesting for user data`);
  const { userID } = req.body;
  User.findById(userID, (err, user) => {
    if (err) {
      return next({ err });
    }
    const activities = user.preferred_activities;
    // Getting an array of the user's activities
    const activitiesArray = activities.map((activity) => {
      return activity.activity;
    });
    res.locals.activities = activitiesArray;
    // console.log(res.locals.activities)
    console.log(res.locals.activities);
    next();
  });
};

matchesController.findOtherUsers = (req, res, next) => {
  console.log(`Requesting for activities array`);
  const { activities } = res.locals;
  // console.log(activities)

  // const matchesArray = []
  Activities.find({ name: {$in: activities} })
            .then(users => {
              res.locals.matches = users[0].users
              console.log(res.locals.matches)
              next();
            }).catch(err => {
              console.log(err)
            })
}
 
// matchesController.returnMatches = (req, res, next) => {
//   console.log(`Returning Matches`);
//   const { matchesArray } = res.locals;
//   console.log(matchesArray)

// }


// {
//   matches: {
//     coffee: [{user 1}, {user 2}],
    
//   }

// }


module.exports = matchesController;


// Query a user from the database with a given UserID
  //Expect: Access to the woof-users.preferred_activities Array.
    // To do: Loop through array to get access to keys
    //        Retrieve the list of activities in an array --> ['coffee', 'beach']

// Query the activities database
