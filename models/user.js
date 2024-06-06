const Sequelize = require('sequelize');


class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            nick : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true,

            },
            userId:{
                type : Sequelize.STRING(50),
                allowNull : false,
                unique : true,

            },
            password:{
                type : Sequelize.STRING(100),
                allowNull : true,
               
            },
        },
        {
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : 'User',
            tableName : 'users',
            paranoid : true,
            charset  : 'utf8',
            collate : 'utf8_general_ci',

            

        })
    }

    static associate(db){
        db.User.hasMany(db.Post,{foreignKey : 'poster', sourceKey : 'id'});
        db.User.hasMany(db.Comment,{foreignKey : 'commenter', sourceKey : 'id'});
    }
};
module.exports = User;