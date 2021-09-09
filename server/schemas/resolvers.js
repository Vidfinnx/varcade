const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      console.log("profiles");
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      console.log("profile");
      console.log(profileId);
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      // console.log("//////////////////////////////////");
      // console.log(context); // logs the req which comes from the auth.js file, the authMiddleware function
      // console.log("//////////////////////////////////");
      if (context.profile) {
        // console.log("//////////////////////////////////");
        // console.log(context.user); // this logs the req.user that that comes from the auth.js file, the authMiddleware function
        // console.log("//////////////////////////////////");
        return Profile.findOne({ _id: context.profile._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  }, // end of Query
  Mutation: {
    addProfile: async (parent, { username, password }) => {
      const profile = await Profile.create({ username, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { username, password }) => {
      const profile = await Profile.findOne({ username });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;

// const { User, Score } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../auth/auth');

// const resolvers = {
//   Query: {
//     user: async (parent, args, context) => {
//       if(context.user){
//         const user = await User.findById(context.user._id).populate({
//           path: 'orders.products',
//           populate: 'category',
//         });
//         user.orders.sort((a,b) => {b.purchaseDate-a.purchaseDate});
//         return user;
//       }
//       throw new AuthenticationError("Not Logged In!")
//     },
//   Mutation:  {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },

//     createScore: async (parent, args) => {
//       const score = await Score.create(args);
//       return score;
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     }
//   }
// }
// };

// module.exports = resolvers;
