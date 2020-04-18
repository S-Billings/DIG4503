import React from 'react';
import Logo from './images/logo.jpg';
import Bertha from './images/Bertha.png';
import 

class Homepage extends React.Component{
    render(){
        return(
            <body>
                <div className="intro">
                    <h1>Welcome to Indiga's Website</h1>
                    <img src={Logo} alt=" animal crossing: new horizon logo"/>
                </div>
                <div className="overview">
                    <h4>Our Native Fruit</h4>
                    <img src ="img/nativeFroot.png" alt=" Animal crossing peach"/>
                    <p>Peaches</p>
                    <h5>Our Current Island Layout</h5>
                    <img src = "../img/indigaLayout.jpg" alt=" Island Map"/>
                    <div className="residents">
                        <h4>Meet Our Current Residents!</h4>
                        <div className="list">
                            <ol>
                                <img src="/img/Fuchsia.png" alt="fuchsia a animal crossing villager"/>
                                <li>Fuchsia</li>
                                <img src ="img/Sheldon.png" alt="sheldon a animal crossing villager"/>
                                <li>Sheldon</li>
                                <img src="img/Erik.png" alt="erik a animal crossing villager"/>
                                <li>Erik</li>
                                <img src={Bertha} alt="bertha a animal crossing villager"/>
                                <li>Bertha</li>
                                <img src="img/uglyBitch.png" alt="henry a animal crossing villager"/>
                                <li>Henry</li>
                                <img src="img/Bitch.png" alt= "flora a animal crossing villager"/>
                                <li>Flora</li>
                            </ol>
                        </div>
                    </div>
                    <div className="closer">
                        <h5>Thinking about joining the Indiga island community?</h5>
                        
                        <button onClick="window.location.href= 'https://www.animal-crossing.com/new-horizons/'">Click here to find out our next flights.</button>
                    </div>
                    
                </div>
            </body>
        )
    }
}

export default Homepage;