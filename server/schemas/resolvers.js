const { AuthenticationError } = require('apollo-server-express');
const { User, Matchup} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userName }) => {
      return User.findOne({ userName }).populate('Matchup');
    },
    matchups: async (parent, { userName }) => {
      const params = userName ? { userName } : {};
      return Matchup.find(params);
    },
   /*  thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    }, */
  },

  Mutation: {
    addProfile: async (parent, { userName, password }) => {
      const user = await User.create({ userName, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });

      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
/*     addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    }, */
  },
};

module.exports = resolvers;
