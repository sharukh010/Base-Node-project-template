const {Logger} = require("../config")
class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const response = this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud repo : create");
            throw error;
        }
    }

    async destroy(data){
        try {
            const response = this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in crud repo : destroy");
            throw error;
        }
    }

    async get(data){
        try {
            const response = this.model.findByPK(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in crud repo : get");
            throw error;
        }
    }

    async getAll(){
        try {
            const response = this.model.findAll();
            return response;            
        } catch (error) {
            Logger.error("Something went wrong in crud repo : getAll");
            throw error;            
        }
    }

    async update(id,data){
        try {
            const response = this.model.update(data,{
                where:{
                    id:id
                }
            })
        } catch (error) {
            Logger.error("Something went wrong in crud repo : update");
            throw error; 
        }
    }
}

module.exports = CrudRepository;