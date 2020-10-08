const { User } = require('../models/UserModels');
const Activities  = require('../models/ActivitiesModels');

const matchesController = {};

// FINDING AN ACTIVITIES MATCH FOR THE USER BASED ON USER ID. 

matchesController.userActivities = (req, res, next) => {
  console.log(`Requesting for user data`)
  const { userID } = req.body;

    User.findById(userID, (err, user) => {
      if (err) {
        return next({ err });
      }
      const activities = user.preferred_activities;
      // Getting an array of the user's activities
      const activitiesArray = activities.map((activity) => {
        return activity.activity
      })
      res.locals.activities = activitiesArray;
      console.log(res.locals.activities)
      next();
    });
}

matchesController.findOtherUsers = (req, res, next) => {
  console.log(`Requesting for activities array`);
  const { activities } = res.locals;
  // console.log(activities)

  // const matchesArray = []
  Activities.find({ name: {$in: activities} })
            .then(users => {
              res.locals.matches = users[0].users
              console.log(res.locals.matches)
            }).catch(err => {
              console.log(err)
            })

  // activities.forEach((activity) => {
  //   console.log(activity);
  //   Activities.find({ name: activity }, (err, result) => {
  //     if (err) {
  //       return next(err);
  //     }
  //      console.log(result[0].users)
  //      const subArray = result[0].users
  //     matchesArray.push(...subArray)
  //   });
  // })
  // console.log('result->', matchesArray)
  // res.locals.matchesArray = matchesArray;
  next();
}
 
matchesController.returnMatches = (req, res, next) => {
  console.log(`Returning Matches`);
  const { matchesArray } = res.locals;
  console.log(matchesArray)

}



module.exports = matchesController;


// Query a user from the database with a given UserID
  //Expect: Access to the woof-users.preferred_activities Array.
    // To do: Loop through array to get access to keys
    //        Retrieve the list of activities in an array --> ['coffee', 'beach']

// Query the activities database
