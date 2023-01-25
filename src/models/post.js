const sequelize = require('sequelize');

const DB_DATABASE = process.env.POSTGRES_DB || "kube_news";
const DB_USERNAME = process.env.POSTGRES_USER || "kubenews";
const DB_PASSWORD = process.env.POSTGRES_PASSWORD || "$kube#news";
const DB_HOST = process.env.POSTGRES_DB_HOST || "postgres-service";

const seque = new sequelize.Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres'
  });

class Post extends sequelize.Model {
  
  save() {
    
    console.log('Entrou')
    super.save();
  }
}

Post.init({
  title: {
    type: sequelize.DataTypes.STRING,
    require: true
  },
  summary: {
    type: sequelize.DataTypes.STRING,
    require: true
  },
  publishDate: {
    type: sequelize.DataTypes.DATEONLY,
    require: true
  },
  content: {
    type: sequelize.DataTypes.STRING,
    require: true
  },
}, {
  sequelize: seque, // We need to pass the connection instance
  modelName: 'Post' // We need to choose the model name
})

exports.initDatabase = () => {
    seque.sync({ alter: true })
}

exports.Post = Post;

