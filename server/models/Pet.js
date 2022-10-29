const { Schema, model } = require('mongoose');

const petSchema = new Schema(
  {
    petName: {
      type: String,
      required: 'You need to enter a pet name!',
    },
    type: {
      type: String,
      required: 'Dog or Cat?' 
    },
    breed: {
      type: String,
      required: 'Please enter breed of your pet.'
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Pet = model('Pet', petSchema);

module.exports = Pet;