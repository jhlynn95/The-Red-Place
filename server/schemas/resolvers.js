const { AuthenticationError } = require("apollo-server-express");
const { Admin } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // check if admins exist
            if (context.admin) {
                const adminData = await Admin.findOne({ _id: context.admin._id }).select(
                    "-__v -password"
                );
                return adminData;
            }
            throw new AuthenticationError("Not logged in");
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const admin = await Admin.findOne({ email });
            // check if admin exists with email and credentials
            if (!admin) {
                throw new AuthenticationError("Incorrect credentials");
            }
            const correctPassword = await admin.isCorrectPassword(password);

            // check password
            if (!correctPassword) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(admin);
            return { token, admin };            
        },
        addAdmin: async (parent, args) => {
            const admin = await Admin.create(args);
            const token = signToken(admin);
      
            return { token, admin };
        },
        addedItem: async (parent, { input }, context) => {
            if (context.item) {
                const updatedItem = await item.findOneAndUpdate(
                    { _id: context.item._id },
                    { $addToSet: { savedItem: input } },
                    { new: true, runValidators: true }
                );
                return updatedItem;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        removeItem: async (parent, { itemId }, context) => {
            if (context.user) {
                const updatedUser = await item.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedItem: { itemId: itemId } } },
                    { new: true }
                );
                return updateditem;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },
};

module.exports = resolvers