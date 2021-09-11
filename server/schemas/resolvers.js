const { User, Score } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../auth/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if(context.user){
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category',
        });
        user.orders.sort((a,b) => {b.purchaseDate-a.purchaseDate});
        return user;
      }
      throw new AuthenticationError("Not Logged In!")
    },
  Mutation:  {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    createScore: async (parent, args) => {
      const score = await Score.create(args);
      return score;
    },
    updateScore: async (parent, args) => {
      const score = await Score.update(args);
      return score;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('User does not exist');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
} 
};

module.exports = resolvers;
