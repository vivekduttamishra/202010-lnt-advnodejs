let sequelize= require('../models/sequelize');



class AuthorService{

    async addAuthor(author){

        let result=await sequelize.Author.create(author); //may throw an exception
        return result;

    }

    async addMany(authors){

        let result=await sequelize.Author.bulkCreate(author); //may throw an exception
        return result;
    }


    async getAllAuthors(){
        return await sequelize.Author.findAll();
    }

    async getById(id){
        return await sequelize.Author.findByPk(id);
    }



}


module.exports=AuthorService;
