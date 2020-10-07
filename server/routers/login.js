const { Router } = require('express');
const express = require('express');
const userController = require('../controllers/UserController');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/login',
  userController.createUser,
  (req, res) => res.status(200).json(res.locals.data)
);

router.post('/getUserData',
  userController.sendUserData,
  (req, res) => res.status(200).json(res.locals.data)
);

router.post('/deleteUser/:id',
  userController.deleteUserData,
  (req, res) => res.status(200).json(res.locals.data)
);

module.exports = router;

