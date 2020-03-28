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

    fetch("/api/pokemon/"+ type.value).then((res)=> {return res.json();}).then((processed)=>{
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
          <div class= "home">
              <Link href="/pokeName">Search Pokemon by Name</Link>
              <br></br>
              <Link href="/pokeId">Search Pokemon by ID</Link>
              <br></br>
              <Link href="/pokeType">Search Pokemon by Type</Link>
          </div>
      )
  }
}

export default App;