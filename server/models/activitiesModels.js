const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SAVING ACTIVITIES SCHEMA FOR MONGODB
const activitiesSchema = new Schema({
  coffee: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
      description: String,
    },
  ],
  beach: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
      description: String,
    },
  ],
  music: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
      description: String,
    },
  ],
  walk: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
      description: String,
    },
  ],
  hiking: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
      description: String,
    },
  ],
  brunch: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
      description: String,
    },
  ],
  timestamps: true,
});

module.exports = mongoose.model('activities', activitiesSchema);

// coffee: [{user_id: 524535, description: "i like black coffee"}, { username }]
