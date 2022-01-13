const cuevana = require('cuevana3');

class ApiController {
    async highlights(req, res) {
        try {
            const highlights =  await cuevana.getMovies(0);
            return res.status(200).json({
                statusCode: 200,
                ok:true,
                data:highlights
            })
        } catch (error) {
            return res.status(500).send({
                statusCode:500,
                error:error
            })
        }
    }
    async getLinks(req, res) {
        try {
            const links =  await cuevana.getLinks(`${req.params.id}/${req.params.name}`);            
            return res.status(200).json({
                statusCode: 200,
                ok:true,
                data:links
            })
        } catch (error) {
            return res.status(500).send({
                statusCode:500,
                error:error
            })
        }
    }
    async getDetail(req, res) {
        try {
            const links =  await cuevana.getDetail(`${req.params.id}/${req.params.name}`);
            return res.status(200).json({
                statusCode: 200,
                ok:true,
                data:links
            })
        } catch (error) {
            return res.status(500).send({
                statusCode:500,
                error:error
            })
        }
    }



    async searchByName(req, res) {
        try {
            const result = await cuevana.getSearch(req.params.name,1);
            if(result.length == 0) {
                return res.status(200).json({
                    statusCode: 200,
                    ok:true,
                    data:[]
                })
            }
            return res.status(200).json({
                statusCode: 200,
                ok:true,
                data:result
            })

        } catch (error) {
            return res.status(500).send({
                statusCode:500,
                error:error
            })
        }
    }
}

module.exports = new ApiController();