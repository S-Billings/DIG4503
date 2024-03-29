import Head from "next/head";
import Link from "next/link";
import styles from "../styling.module.css";
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
        <div className={styles.general}>     
            <h3>Search by Name:</h3>
                <input className={styles.input} type="text" id="pokemonName"/>
                <button className ={styles.button} onClick={() => {this.getName()}}>Search</button>
                <div className={styles.links}>
                    <Link href= "/pokeId"><a className={styles.pokeId}>Click here to search by Id</a></Link>
                    <br></br>
                    <Link href= "/pokeType"><a className={styles.pokeType}>Click here to search by Type</a></Link>
                    <br></br>
                    <Link href="/index.js"><a className={styles.begin}>Click here to go back to the home page</a></Link>
                </div>
                <div id="results" className={styles.result}></div>
        </div>

    )
    };
}
    export default App;