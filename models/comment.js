const Sequelize = require('sequelize');

class Comment extends Sequelize.Model{ 
    static initiate(sequelize){
       Comment.init({
            content: {
                type : Sequelize.STRING(1000),
                allowNull : false,
            }, // 게시물 제목
            commentId : {
                type : Sequelize.STRING(10),
                allowNull : false,
                unique : true,
            }, // 댓글 고유 아이디
            views : {
                type : Sequelize.INTEGER(),
                defaultValue : 0,
                allowNull : false,
            }


            

        },
    {
        sequelize,
        timestamps : true,
        underscored : false,
        modelName : 'Comment',
        tableName : 'comments',
        paranoid : true,
        charset : 'utf8mb4',
        collate : 'utf8mb4_general_ci',

    }
        )
    }


    
    static associate(db){
       db.Comment.belongsTo(db.User,{foreignKey : 'commenter', targetKey : 'id'});
       db.Comment.belongsTo(db.Post,{foreignKey : 'post_no', targetKey :'id'});
        
    }
}
module.exports = Comment;