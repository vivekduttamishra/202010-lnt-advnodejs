let sequelize = require('../models/sequelize');

let fetchOptions = {
    attributes: {
        exclude: ['createdAt', 'updatedAt','authorId']
    },
    //add the associted details
    include:[
        {
            model:sequelize.Author,
            as:"Author",
            attributes:{
                exclude: ['createdAt','updatedAt']
            }
        }

    ]
};

class BookService {

    async addBook(Book) {

        let result = await sequelize.Book.create(Book); //may throw an exception
        return result;

    }

    async addMany(Books) {

        let result = await sequelize.Book.bulkCreate(Book); //may throw an exception
        return result;
    }


    async getAllBooks() {
        return await sequelize.Book.findAll(fetchOptions);
    }

    async search(options){
        options={
            ...fetchOptions,
            ...options
        };
        return await sequelize.Book.findAll(options);

    }

    async getById(id) {
        let Book = await sequelize.Book.findByPk(id);
        if (!Book)
            throw { "message": "No Such Book", id };
        else
            return Book;
    }

    async removeBook(id) {
        await this.getById(id);
        await sequelize.Book.destroy({ where: { id } });
    }


}


module.exports = BookService;
