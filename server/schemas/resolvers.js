const { User, Score } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    score: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Score.find(params);
    },
  },
  Mutation: {
    createScore: async (parent, args) => {
      const score = await Score.create(args);
      return score;
    },
    // createScore2: async (parent, { _id, techNum }) => {
    //   const score2 = await Score2.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`Score${scoreNum}`]: 1 } },
    //     { new: true }
    //   );
    //   return score2;
    // },
  },
};

module.exports = resolvers;
