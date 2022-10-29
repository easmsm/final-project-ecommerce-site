const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: 'Please select an item!',
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
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