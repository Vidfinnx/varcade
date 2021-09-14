const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      console.log("users");
      return User.find();
    },
    //   user: async (parent, { userId }) => {
    //     console.log("user");
    //     console.log(userId);
    //     return User.findOne({ _id: userId });
    //   },
    //   me: async (parent, args, context) => {
    //     // console.log("//////////////////////////////////");
    //     // console.log(context); // logs the req which comes from the auth.js file, the authMiddleware function
    //     // console.log("//////////////////////////////////");
    //     if (context.user) {
    //       // console.log("//////////////////////////////////");
    //       // console.log(context.user); // this logs the req.user that that comes from the auth.js file, the authMiddleware function
    //       // console.log("//////////////////////////////////");
    //       return User.findOne({ _id: context.user._id });
    //     }
    //     throw new AuthenticationError("You need to be logged in!");
    //   },
    //   // user: async (parent, args, context) => {
    //   //   if (context.user) {
    //   //     const user = await User.findById(context.user._id).populate({
    //   //       path: "orders.products",
    //   //       populate: "category",
    //   //     });
    //   //     user.orders.sort((a, b) => {
    //   //       b.purchaseDate - a.purchaseDate;
    //   //     });
    //   //     return user;
    //   //   }
    //   //   throw new AuthenticationError("Not Logged In!");
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },

    updateScore: async (parent, {username,score}) => {
      // console.log(args);
      const scored = await User.findOneAndUpdate({username},{ $set: { score: score } },{new: true });
      console.log(scored);
      return { scored };
      
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("NO USER FOUND BY THAT NAME");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("WRONG PASSWORD");
      }

      const token = signToken(user);

      return { token, user };
    },

  },
};

module.exports = resolvers;
