import React from 'react';

class Homepage extends React.Component{
    render(){
        return(
            <body>
                <div>
                    <h1>Welcome to Indiga's Residetnal Representative's Website</h1>
                </div>
                <div>
                    <h4>Our Native Fruit</h4>
                    <img src ="../img/nativeFroot.png" alt="Animal crossing peach"/>
                    <p>Peaches</p>
                    <div>
                        <h4>Meet Our Current Residents!</h4>
                        <div>
                            <ol>
                                <img src="/img/Fuchsia.png" alt="fuchsia a animal crossing villager"/>
                                <li>Fuchsia</li>
                                <img src ="img/Sheldon.png" alt="sheldon a animal crossing villager"/>
                                <li>Sheldon</li>
                                <img src="img/Erik.png" alt="erik a animal crossing villager"/>
                                <li>Erik</li>
                                <img src="img/Bertha.png" alt="bertha a animal crossing villager"/>
                                <li>Bertha</li>
                                <img src="img/uglyBitch.png" alt="henry a animal crossing villager"/>
                                <li>Henry</li>
                                <img src="img/Bitch.png" alt= "flora a animal crossing villager"/>
                                <li>Flora</li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <h5>Thinking about joining the Indiga island community?</h5>
                        <button>Click here to find out our next flights.</button>
                    </div>
                </div>
            </body>
        )
    }
}

export default Homepage;