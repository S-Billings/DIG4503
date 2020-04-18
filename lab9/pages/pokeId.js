import Head from "next/head";
import Link from "next/link";
import styles from "../styling.module.css";
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
            <div className={styles.general}>
                <Head><title>Find a Pokemon by ID</title></Head>        
                <h3>Search by ID:</h3>
                <input className={styles.input} type="text" id="pokemonId" className={styles.input}/>
                <button className ={styles.button} onClick={() => {this.getId()}}>Search</button>
                
                <div className={styles.links}>
                    <Link href="/pokeName"><a className={styles.pokeName}>Click here to search by name</a></Link>
                    <br></br>
                    <Link href = "/pokeType"><a className={styles.pokeType}>Click here to search by types</a></Link>
                    <br></br>
                    <Link href="/"><a className={styles.begin}>Click here to go back to the home page</a></Link>

                </div>
                <div id="results" className={styles.result}>Your results:</div>
        </div>
        )
    }
}
export default App