import React from 'react';

class idSearch extends React.Component{
    idClick(event){
        event.preventDefault();

        let pokeID = document.querySelector("#pokeId");

        fetch("http://localhost:80/id/"+ pokeID.value).then((res)=>{
            return res.json();
        }).then((processed)=>{
            let result =document.querySelector('#response');
            if(processed.error){
                result.innerHTML = processed.error;
            } else{
                result.innerHTML ="You input is" + processed.name + ".";

            }
        });
    };
    render(){
        return(
            <div>
            <form onSubmit={this.idClick}>
            <h1>Enter an ID Number</h1>
            <input type = "text" id = "pokeId"/>
            <button>Submit</button>
            </form>
            </div>
        );
    };
}

export default idSearch;