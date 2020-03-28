const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { id } = request.body
        console.log(id)

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first()

        if(!ong){
            response.status(400).json({ error: "Ong not found"})
        }

        return response.json(ong)
    }
}
