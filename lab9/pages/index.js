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
              resultElement.innerHTML = "The Pokemon ID is: "+ processed.id+ " and you chose: "+processed.name+".";
          }
      });
  }

  getId(){
      let pokeId = document.querySelector("#pokemonId");

      fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
          
          let resultElement = document.querySelector("#results");

          if(processed.error){
              resultElement.innerHTML ="Could not find your search. Please try again.";
          } else{
              resultElement.innerHTML = "The Pokemon ID you entered is: "+ processed.id+" and the ID belongs to: "+processed.name+". This Pokemon is a "+processed.type+" type .";

          }
      });
  }
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
          <div className= {styles.home}>
              <Link href="/pokeName"><a className={styles.pokeId}>Search Pokemon by Name</a></Link>
              <br></br>
              <Link href="/pokeId"><a className={styles.pokeId}>Search Pokemon by ID</a></Link>
              <br></br>
              <Link href="/pokeType"><a className={styles.pokeType}>Search Pokemon by Type</a></Link>
              <hr/>
              <div className= {styles.thanks}>
                 <p>Thanks for checking out my project! Somthing for your troubles. </p>
                 
              </div>
          </div>
      )
  }
}

export default App;