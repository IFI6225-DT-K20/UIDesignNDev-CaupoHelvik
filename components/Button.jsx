import React from 'react';
import "../css/button.scss";

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //...
        }
    }

    render() {
        return (
            <button className={"btn"}>
                todo
            </button>
        )
    }
}

export default Btn;