import Head from "next/head";
import Link from "next/link";
class App extends React.Component{
    getId(){
        let pokeId = document.querySelector("#pokemonId");

        fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML ="Could not find your search. Please try again.";
            } else{
                resultElement.innerHTML = "The Pokemon ID you entered is: "+ processed.id+" and the ID belongs to: "+processed.name+". This Pokemon is a "+processed.typeList+" type.";

            }
        });
    }
    render(){
        return(
            <div>
                <Head><title>Find a Pokemon by ID</title></Head>        
            <h3>Search by ID:</h3>
                <input type="text" id="pokemonId"/>
                <button onClick={() => {this.getId()}}>Search</button>
                <div id="results"></div>
                <div>
                    <Link href="/pokeName">Click here to search by name.</Link>
                    <br></br>
                    <Link href = "/pokeType">Click here to search by types</Link>
                </div>
        </div>
        )
    }
}
export default App