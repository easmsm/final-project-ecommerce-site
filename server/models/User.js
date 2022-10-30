const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const productSchema = require('./Product');
const petSchema = require('./Pet')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    phone: {
        type: String,
        match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, 'Must enter a valid phone number!']

    },
    address: {
        type: String,
        
    },
    pets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pet'
        }
    ],
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// might use this for pet count
userSchema.virtual('petCount').get(function() {
  return this.pets.length;
});

// might use this for product count
// userSchema.virtual('productCount').get(function() {
//   return this.products.length;
// });

const User = model('User', userSchema);

module.exports = User;