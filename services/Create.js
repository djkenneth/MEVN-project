const Posts = require("../model/Post");

module.exports = async (title, description) => {
  try {
    await Posts.insertMany({
      title,
      description,
    });

    return true;
  } catch (error) {
    return false;
  }
};
