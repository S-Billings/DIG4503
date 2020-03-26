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
}
render()
    return(
        <div>        
            <h3>Search by Name:</h3>
                <input type="text" id="pokemonName"/>
                <button onClick={() => {this.getName()}}>Search</button>
                <div id="results"></div>
        </div>

    )
