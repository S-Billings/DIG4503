import React from 'react';

class Application extends React.Component{
    render(){
        return(
            <body>
                <h2>Apply to become a Indiga Resident</h2>
                <div>
                    <form>
                        <input type = "text">Enter your name:</input>
                        <input type= "text">Why do you want to live on Indiga?</input>
                        <input type = "text">What is your favorite form of making bells?</input>
                    </form>
                </div>
            </body>
        )
    }
}
export default Application;