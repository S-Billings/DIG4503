const Component = require("./Component.js");

class Header extends Component {
    constructor(){
        // changing properties through classes use super
        super();
        this.text = "Oh hi!";
        // We did not pass any arguments in Components.js
    }
}

module.exports = Header;