const { AuthenticationError } = require("apollo-server-express");
const { User, Matchup, Player } = require("../models");
const { signToken } = require("../utils/auth");

//NEEDS HELP: We are confused on a lot in this file

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("matchup");
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate("matchup");
    },
    // from week 21 activity 26
    matchups: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Matchup.find(params)
        .populate("createdBy")
        .populate("player1")
        .populate("player2");
    },
    matchup: async (parent, { matchupId }) => {
      return await Matchup.findOne({ _id: matchupId });
    },

    players: async () => {
      return await Player.find();
    },

    //needs help
    player: async (parent, { full_name }) => {
      return await Player.findOne({ full_name: full_name });
    },
    // // From activity 26 week 21
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate("thoughts");
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    /*  thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    }, */
  },

  Mutation: {
    addProfile: async (parent, args) => {
      console.log(args);
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    createMatchup: async (parent, { player1, player2 }, context) => {
      console.log(context.user);
      if (context.user) {
        console.log("hi");
        console.log(context.user);
        const matchup = await Matchup.create({
          player1,
          player2,
          createdBy: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { matchups: matchup._id } }
        );
        return matchup;
      }
    },
    removeMatchup: async (parent, { matchupId }) => {
      return Matchup.findOneAndDelete({ _id: matchupId });
    },

    createVote: async (parent, { _id, playNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`player${playNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
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
