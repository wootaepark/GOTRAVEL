const {Model, DataTypes}= require('sequelize');


class AccomodationInfo extends Model{
    static initiate(sequelize){
        AccomodationInfo.init({
            accomodation_name: {
                type : DataTypes.STRING(50),
                allowNull : false,
                unique : true,

            },
            cost_won:{
                type : DataTypes.INTEGER(),
                allowNull : true,

            },
            location_city:{
                type : DataTypes.STRING(50),
                allowNull : true,
               
            },
            checkIn_time:{
                type : DataTypes.DATE(),
            },
            checkOut_time:{
                type : DataTypes.DATE(),
            }
            
        },
        {
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'AccomodationInfo',
            tableName : 'accomodationInfo',
            paranoid : false,
            charset  : 'utf8',
            collate : 'utf8_general_ci',

         

        })
    }static associate(db){

        
    }

   
};
module.exports = AccomodationInfo;