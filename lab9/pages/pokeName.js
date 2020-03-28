import Head from "next/head";
import Link from "next/link";
class App extends React.Component{
    getName(){

        let name = document.querySelector("#pokemonName");

        fetch("/api/pokemon/name/" + name.value).then((res)=>{return res.json();}).then((processed)=>{
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML = "Could not find your search. Please try again.";
            } else{
                resultElement.innerHTML = "The Pokemon ID is: "+ processed.id+ " and you chose: "+processed.name+". This Pokemon is a "+processed.typeList+" type.";
            }
        });
    }
render(){
    return(
        <div>
            <head>Search Pokemon by Name</head>        
            <h3>Search by Name:</h3>
                <input type="text" id="pokemonName"/>
                <button onClick={() => {this.getName()}}>Search</button>
                <div id="results"></div>
                <div>
                    <Link href= "/pokeId">Click here to search by Id</Link>
                    <br></br>
                    <Link href= "/pokeType">Click here to search by Type</Link>
                </div>
        </div>

    )
    };
}
    export default App;