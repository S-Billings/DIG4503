import Head from "next/head";
import Link from "next/link";

class App extends React.Component{
    getType(){
        let type = document.querySelector("#pokeType");

        fetch("/api/pokemon/type"+ type.value).then((res)=> {return res.json();}).then((processed)=>{
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML = "Types not found, try again.";
            }else{
                resultElement.innerHTML = "You chose "+typeList.processed+" type, and the following pokemons match: "+name.processed+".";
            }
        });
    }

    render(){
        return(
            <div className={styles.general}>
                <Head>
                    <a>Pokemon Search: By Type</a>
                </Head>
                <input className={styles.input} type = "text" id = "pokeType"/>
                <button className ={styles.button} onClick = {() =>{this.getType()}}>Search</button>
                
                <div className={styles.links}> 
                    <Link href= "/pokeName"><a>Click here to search by Name</a></Link>
                    <br></br>
                    <Link href= "/pokeId"><a>Click here to search by ID</a></Link>
                </div>
                <div id="results" className={styles.result}></div>
            </div>
        )
    }

}

export default App;