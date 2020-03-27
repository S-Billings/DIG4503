class App extends React.Component{
    getId(){
        let pokeId = document.querySelector("#pokemonId");

        fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML ="Could not find your search. Please try again.";
            } else{
                resultElement.innerHTML = "The Pokemon ID you entered is: "+ processed.id+" and the ID belongs to: "+processed.name+".";

            }
        });
    }
    render(){
        return(
            <div>
                <head>Find a Pokemon by ID:</head>        
            <h3>Search by ID:</h3>
                <input type="text" id="pokemonId"/>
                <button onClick={() => {this.getId()}}>Search</button>
                <div id="results"></div>
                <div>
                    <link href="pokeName.js">Click here to search by name.</link>
                    <link href = "pokeType.js">Click here to search by types</link>
                </div>
        </div>
        )
    }
}
export default App