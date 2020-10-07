const { User } = require('../models/UserModels');

const userController = {};

userController.sendUserData = async (req, res, next) => {
   // get the user id from params
   const { id } = req.params;
   console.log('Send data for user ID:', id);
   // verify that user name is valid
   if (!id) {
     return next({
       log: 'UserController.sendUserData ERROR: userName is undefined',
       message: { err: 'UserController.sendUserData ERROR: Check server logs for details' },
     });
   }
  const result = await User.findById(id).exec();
  res.locals.data = result;
  return next();
};


// userController.updateUserData = async (req, res, next) => {
//   const userData = req.body;
//   // TODO: verify that user name is valid
//   if (!userName) {
//     return next({
//       log: 'UserController.updateUserData ERROR: userName is undefined',
//       message: { err: 'UserController.updateUserData ERROR: Check server logs for details' },
//     });
//   }
//   try {
//     const user = {_id: userID};
//     // contains the fields from req.body
//     const updatedData = {

//     }
//     const queryResult = await User.findOneAndUpdate(user, updatedData, {new: true}); // new true sends back the updated user obj
//     res.locals.data = queryResult;
//   } catch (err) {
//     console.log(err);
//   }
//   return next();
// };

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
