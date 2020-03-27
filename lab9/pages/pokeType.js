class TypeSearch extends React.Components{
    getType(){
        let type = document.querySelector("#pokeType");

        fetch("/api/pokemon/type"+ type.value).then((res)=> {return res.json();}).then((processed)=>{
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML = "Types not found, try again.";
            }else{
                resultElement.innerHTML = "You chose "+type.processed+" type, and the following pokemons match: "+name.processed+".";
            }
        })
    }

    render(){
        return(
            <div>
                <input type = "text" id = "pokeType"/>
                <button onClick = {() =>{this.getType()}}>Search</button>
                <div id = "results"></div>
                <div>
                    <link href= "pokeName.js">Click here to search by Name</link>
                    <link href= "pokeId.js">Click here to search by ID</link>
                </div>
            </div>
        )
    }

}

export default TypeSearch;