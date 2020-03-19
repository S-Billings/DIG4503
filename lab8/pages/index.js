class App extends React.Component{

  
    getName(){

        let name = document.querySelector("#pokemonName");

        fetch("/api/pokemon/name/" + name.value).then((res)=>{return res.json();}).then((processed)=>{
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML = "Could not find your search. Please try again.";
            } else{
                resultElement.innerHTML = "The Pokemon ID is: "+ processed.id+ " and you chose: "+processed.name+".";
            }
        });
    }

    getId(){
        let pokeId = document.querySelector("#pokemonId");

        fetch("/api/pokemon/id/" + id.value).then((res)=>{return res.json();}).then((processed)=> {
            
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
                <h3>Search by Name:</h3>
                <input type="text" id="pokemonName"/>
                <button onClick={() => {this.getName()}}>Search</button>
                <div>
                    <br/>
                    <h3>Search by ID</h3>
                <input type="text" id="pokemonId"/>
                    <button onClick = {() => {this.getId()}}>Search</button>
                    </div>
                    <br/>
                <div id="results"></div>
            </div>
        )
    }
}

export default App;