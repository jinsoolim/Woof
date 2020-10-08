const { Router } = require('express');
const express = require('express')
const matchesController = require('../controllers/MatchesController');
const router = express.Router();

router.get(
  '/',
  matchesController.userActivities,
  matchesController.findOtherUsers,
  (req, res) => {
    res.status(200).json(res.locals.matches);
  }
);

module.exports = router;