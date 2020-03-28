import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error":"Type not found."};

    let pokemon = getPokemon.typeList(req.query.typeList);

    if(pokemon !== null){
        result = pokemon;

    }
    res.json(result);
}