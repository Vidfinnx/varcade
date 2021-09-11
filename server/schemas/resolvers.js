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

    // createScore: async (parent, args) => {
    //   const score = await Score.create(args);
    //   return score;
    // },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username, password });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;