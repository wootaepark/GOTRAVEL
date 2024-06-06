const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const AirLineInfo = require('./airLineInfo')
const AccomodationInfo = require('./accomodationInfo');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Post = Post;
db.AccomodationInfo = AccomodationInfo;
db.AirLineInfo = AirLineInfo;
db.Comment = Comment;

User.initiate(sequelize);
Post.initiate(sequelize);
AccomodationInfo.initiate(sequelize);
AirLineInfo.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Post.associate(db);
AccomodationInfo.associate(db);
AirLineInfo.associate(db);
Comment.associate(db);

module.exports = db;
