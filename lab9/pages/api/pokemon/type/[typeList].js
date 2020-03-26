import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error":"Type not found."};

    let pokemon = getPokemon.getPokemonTypeList(req.params.TypeList);

    if(pokemon !== null){
        result = pokemon;

    }
    res.json(result);
}