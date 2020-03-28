import Head from "next/head";
import Link from "next/link";
import React from "react";
class App extends React.Components{
    getType(){
        let type = document.querySelector("#pokeType");

        fetch("/api/pokemon/type"+ type.value).then((res)=> {return res.json();}).then((processed)=>{
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML = "Types not found, try again.";
            }else{
                resultElement.innerHTML = "You chose "+type.processed+" type, and the following pokemons match: "+name.processed+".";
            }
        });
    }

    render(){
        return(
            <div>
                <Head>
                    <a>Search by type:</a>
                </Head>
                <input type = "text" id = "pokeType"/>
                <button onClick = {() =>{this.getType()}}>Search</button>
                <div id = "results"></div>
                <div>
                    <Link href= "pokeName.js">Click here to search by Name</Link>
                    <br></br>
                    <Link href= "pokeId.js">Click here to search by ID</Link>
                </div>
            </div>
        )
    }

}

export default App;