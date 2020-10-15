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
        let author= await sequelize.Author.findByPk(id);
        if (!author)
            throw  {"message":"No Such Author", id};  
        else
            return author;      
    }

    async removeAuthor(id){
        await this.getById(id);
        await sequelize.Author.destroy({where:{id}});
    }


}


module.exports=AuthorService;
