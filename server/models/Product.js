const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: 'Please select an item!',
    },
    type: {
        type: String,
        required: 'Dog or Cat?',
        stars: String
    },
    description: {
      type: String,
      required: 'Please enter a description' 
    },
    price: {
      type: Number,
      required: 'Please enter a valid price.',
    },
    quantity: {
        type: Number,
        minLength: 0,
        maxLength: 20,
        required: true,
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

const Product = model('Product', productSchema);

module.exports = Product;