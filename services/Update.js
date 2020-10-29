const Posts = require("../model/Post");

module.exports = async (_id, set) => {
  try {
    await Posts.updateOne(
      { _id },
      {
        $set: set,
      }
    );

    return true;
  } catch (error) {
    return false;
  }
};
