const { User, Pet, Product } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        // associates User to Profile/Dashboard
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({_id: context.user._id})
                .select('-__v -password')
                .populate('pets')
                .populate('products');
          
                return userData;
          }
            throw new AuthenticationError('Not logged in');
          },
          // get all users
          users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('pets')
            .populate('products');
        },
       // get a user by username
       user: async (parent, { username }) => {
         return User.findOne({ username })
         .select('-__v -password')
         .populate('pets')
         .populate('products');
       },
       // get all pets
      pets: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Pet.find(params)
      },
      // get one pet by ID
      pet: async (parent, { _id }) => {
        return Pet.findOne({ _id });
      },
      // get all products
      products: async () => {
        return Product.find()
      },
      // get one product by ID
      product: async (parent, { _id }) => {
        return Product.findOne({ _id });
      },
    },

    Mutation: {
        // add user on sign-up
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
    
            return { token, user} ;
      
          },
          //login user
          login: async (parent, { email, password }) => {
            
            const user = await User.findOne({ email })
            
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);
    
            return { token, user};
      
          },
          addPet: async (parent, args, context) => {
            if (context.user) {
              const pet = await Pet.create({ ...args, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { pets: pet._id } },
                { new: true }
              );
          
              return pet;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },
          addProduct: async (parent, { userId, productName }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { products: { productName, username: context.user.username } } },
            { new: true, runValidators: true }
          );
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },


    }







}







module.exports = resolvers;