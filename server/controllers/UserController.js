const { User } = require('../models/UserModels');

const userController = {};

userController.getUserData = async (req, res, next) => {
   // get the user id from params
   const { id } = req.params;
   console.log('Send data for user ID:', id);
   // verify that user name is valid
   if (!id) {
     return next({
       log: 'UserController.getUserData ERROR: userName is undefined',
       message: { err: 'UserController.getUserData ERROR: Check server logs for details' },
     });
   }
  const result = await User.findById(id).exec();
  res.locals.data = result;
  return next();
};


userController.updateUserData = async (req, res, next) => {
  //const userData = req.body;
  // TODO: verify that user name is valid
  const { id } = req.params;
  console.log('updating id:', id);
  const userData = {
    "full_name": "Diego Vazquez",
    "first_name": "Diego",
    "email": "itsdiego@aol.com",
    "profile_image": "https://ca.slack-edge.com/T016VMCKF7Y-U018TU7L5FE-d7b3b26a3732-512",
    "user_age": '99',
    "location": "Galicia",
    "dog_name": "Estrella",
    "dog_image": "https://vetstreet.brightspotcdn.com/dims4/default/bf899ab/2147483647/crop/650x463%2B0%2B0/resize/590x420/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc3%2Fd7%2F9d43eceb4bf7a27bc8ba92facc07%2Fgolden-retriever-ap-hudfmx.jpg",
    "dog_age": '7',
    "dog_size": "Large",
    "dog_breed": "Golden Retriever",
    "preferred_activities": [{
        "activity": "coffee",
        "description": "coffee is the best thing ever!!!!!"
    }, {
        "activity": "beach",
        "description": "i love the beach!!!!!"
    }],
    "timestamps": {
        "$timestamp": {
            "t": 1602086704,
            "i": 1
        }
    }
  }

  if (!id) {
    return next({
      log: 'UserController.updateUserData ERROR: userName is undefined',
      message: { err: 'UserController.updateUserData ERROR: Check server logs for details' },
    });
  }

  // contains the fields from req.body
  const queryResult = await User.findByIdAndUpdate(id, userData, {new: true}); // new true sends back the updated user obj
  res.locals.data = queryResult;
  return next();
};

userController.deleteUserData = async (req, res, next) => {
  // get the user id from params
  const { id } = req.params;
  console.log('Delete user ID:', id);
  // verify that user name is valid
  if (!id) {
    return next({
      log: 'UserController.deleteUserData ERROR: userName is undefined',
      message: { err: 'UserController.deleteUserData ERROR: Check server logs for details' },
    });
  }
  const queryResult = await User.deleteOne({_id: id}).exec();
  res.locals.data = queryResult;
  return next();
};

userController.createUser = async (req, res, next) => {
  const { name, email } = req.body;
  const picURL = req.body.picture.data.url;
  
  // check if user already exists
  const doesUserExist = await User.find({ email });

  // only create new document if user does not exist  
  if (doesUserExist.length === 0) {
    console.log('============> user does not exist');
    const userData = {
      full_name: name,
      first_name: name.split(' ')[0],
      email,
      profile_img: picURL
    };
    const newUser = new User(userData);
    newUser.save((e, r) => {
      if (e) console.log(e);
      const result = fetchUserData({ email });
      result.then(result => {
        res.locals.data = result;
        next();
      })
    });
  } else {
    res.locals.data = doesUserExist;
    next();
  }   
}

const fetchUserData = async (userData) => {
  const result = await User.find(userData);
  return result; 
}




module.exports = userController;
