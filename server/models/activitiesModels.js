const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SAVING ACTIVITIES SCHEMA FOR MONGODB
const activitiesSchema = new Schema({
  coffee: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' }},
  ],
  beach: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' }
    },
  ],
  music: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    },
  ],
  walk: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    },
  ],
  hiking: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    },
  ],
  brunch: [
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    },
  ],
  timestamps: true,
});

module.exports = mongoose.model('activities', activitiesSchema);

// coffee: [{user_id: 524535, description: "i like black coffee"}]
