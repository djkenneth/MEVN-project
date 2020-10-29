const Posts = require("../model/Post");

module.exports = async (_id) => {
  try {
    await Posts.deleteOne({ _id });

    return true;
  } catch (error) {
    return false;
  }
};
