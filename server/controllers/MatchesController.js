const { User } = require('../models/UserModels');
const Activities  = require('../models/ActivitiesModels');

const matchesController = {};

// FINDING AN ACTIVITIES MATCH FOR THE USER BASED ON USER ID. 

// matchesController.findMatchingUsers = async (req, res, next) => {
//   console.log(`Requesting for user data`)
//   const { userID } = req.body;

//   try {
//     const queryResult = await User.find({_id: userID})
//     console.log(queryResult)
//     res.locals.user = queryResult
//   } catch (err) {
//     console.log(err)
//   }
//   return next()
// }

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
      // console.log(res.locals.activities)
      next();
    });
}

matchesController.findOtherUsers = (req, res, next) => {
  console.log(`Requesting for activities array`);
  const { activities } = res.locals;
  // console.log(activities)

  const matchesArray = []

  activities.forEach((activity) => {
    console.log(activity);
    Activities.find({ "name": "coffee" }, (err, result) => {
      if (err) {
        return next(err);
      }
      const mapResult = result[0].users.map((userID) => {
        console.log('this -> ' + userID)
      })
      // console.log(result[0].users);
      // console.log(result)
      // console.log('temp ->' + temp);
      // console.log("what is result: ", result[0].users);
      res.locals.user = result;
    })
  })
  next();
}
  //   console.log(activit)
  //   Activities.find({}, (err, arrayOfUsers) => {
  //     if (err) {
  //       return next({ err });
  //     }
  //     console.log(arrayOfUsers);
  //     matchesArray.push(arrayOfUsers);
  //     console.log(matchesArray);
  //   });
  //   return next()
  // })

  // for each of the activities, do a call on the data base. Store result on array 



module.exports = matchesController;


// Query a user from the database with a given UserID
  //Expect: Access to the woof-users.preferred_activities Array.
    // To do: Loop through array to get access to keys
    //        Retrieve the list of activities in an array --> ['coffee', 'beach']

// Query the activities database
