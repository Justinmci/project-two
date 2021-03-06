const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Likes = require('./Likes');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  User.belongsToMany(Post, {
    through: Likes,
    as: 'liked_posts',
  
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Post.belongsToMany(User, {
    through: Likes,
    as: 'liked_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });

  Likes.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Likes.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Likes, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Likes, {
    foreignKey: 'post_id'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
  });

module.exports = { User, Post, Likes, Comment }
