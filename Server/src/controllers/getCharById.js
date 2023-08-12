const Axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = async (req, res) => {
    
   
    try {
        const response = await Axios(`${URL}${req.params.id}`)
       
        const { data } = response;
        console.log("RESPUESTA: ", data);
        if (data.name) {
            const { id, name, gender, species, origin: { name: origin }, image, status } = data;
            const personaje = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            };
            res.status(200).json(personaje);
        }
        else {
            res.status(404).json({ message: "Not fount" });
        }

    } catch (error) {
        res.status(400).json({ error: error });
    }
}

module.exports = getCharById;