import React from 'react';

class nameSearch extends React.Component{
    nameClick(event){
        event.preventDefault();

        let pokeName = document.querySelector("#pokeName");

        fetch("http://localhost:80/name/"+ pokeName.value).then((res)=>{
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
            <form onSubmit={this.nameClick}>
            <h1>Enter a name of a Pokemon</h1>
            <input type = "text" id = "pokeName"/>
            <button>Submit</button>
            </form>
            </div>
        );
    };
}

export default nameSearch;