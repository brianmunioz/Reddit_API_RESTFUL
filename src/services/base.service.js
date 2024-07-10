class BaseService {

    constructor( respository ){
        this.respository = respository;
    }

    async get( id ) {
        if( !id ){
            const error = new Error();
            error.status = 400;
            error.message = 'id must be sent';
            throw error;
        }

        const currentyEntity = await this.respository.get( id );

        if( !currentyEntity ){
            const error = new Error();
            error.status = 404;
            error.message = 'entity does not found';
            throw error;
        }

        return currentyEntity;

    }

    async getAll( pageSize, pageNum ) {
        return await this.respository.getAll( pageSize, pageNum );
    }

    async create( entity ){
        return await this.respository.create( entity );
    }

    async update( id, entity ){
        if( !id ){
            const error = new Error();
            error.status = 400;
            error.message = 'id must be sent';
            throw error;
        }

        return await this.respository.update( id, entity );
    }

    async delete ( id ) {
        if( !id ){
            const error = new Error();
            error.status = 400;
            error.message = 'id must be sent';
            throw error;
        }

        return await this.respository.delete( id );
    }

}

module.exports = BaseService;