const Posts = require("../model/Post");

module.exports = async () => {
  try {
    const posts = await Posts.find();

    return posts;
  } catch (error) {
    return [];
  }
};
