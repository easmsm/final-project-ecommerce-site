const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: 'Please select an item!',
    },
    type: {
        type: String,
        required: 'Dog or Cat?'
    },
    description: {
      type: String,
      required: 'Please enter a description' 
    },
    price: {
      type: Number,
      required: 'Please enter a valid price.',
      decimal: true
    },
    quantity: {
        type: Number,
        minLength: 0,
        maxLength: 20,
        validate: {
            validator: Number.isInteger,
            message: 'Value must be a number!'
        }
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

const Item = model('Item', itemSchema);

module.exports = Item;