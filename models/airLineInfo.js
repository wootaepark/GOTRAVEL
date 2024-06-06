const {Model, DataTypes}= require('sequelize');


class AirLineInfo extends Model{
    static initiate(sequelize){
        AirLineInfo.init({
            departure_city : {
                type : DataTypes.STRING(50),
                allowNull : false,
                

            },
            arrival_city : {
                type : DataTypes.STRING(50),
                allowNull : false,
            

            },
            cost_won:{
                type : DataTypes.INTEGER(),
                allowNull : true,
                

            },
            departure_dateTime:{
                type : DataTypes.DATE(),
                allowNull : true,
               
            }, 
            arrival_dateTime:{
                type : DataTypes.DATE(),
                allowNull : true,
               
            },
            airline_company:{
                type : DataTypes.STRING(50),
                allowNull : false,
            }
        },
        {
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'AirLineInfo',
            tableName : 'airLineInfo',
            paranoid : false,
            charset  : 'utf8',
            collate : 'utf8_general_ci',
            

         

        })
    }
    static associate(db){

        
    }

   
};
module.exports = AirLineInfo;