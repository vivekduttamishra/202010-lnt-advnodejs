
let sequelize=require('./sequelize'); //get the our sequelize context

let Sequelize=sequelize.Sequelize;  //get Squelize api from 

class Book extends Sequelize.Model{

};



Book.init(
    {
    isbn:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true,
        validate:{
            isNumeric:true,
            len:[10,10]            
        }
    },

    title:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            len:[2,50]
        }
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false,
        validate:{
            len:[10,2000]
        }
    },
    cover:{
        type:Sequelize.STRING,
        validate:{
            isUrl:true,
            endsWith:(value)=>{
                if(!value.toLowerCase().endsWith('.jpg'))
                    throw new Error('cover must be a .jpg file')
            }
        }
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,  //database constraint. becomes part of column schema in database
        validate:{  //client side javascript validation performed before insert/update to database
            min:0,
            max:5000
        }
    }

},
//required to connect the class with context
{   
    sequelize, // We need to pass the connection instance
    modelName: 'Book' // We need to choose the model name
  }

);

sequelize.Book=Book;