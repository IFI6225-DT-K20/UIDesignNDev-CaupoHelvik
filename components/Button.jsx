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
        if(this.props.faIcon) {
            return (
                <button className={"btn "+this.props.cName}>
                    <i className={"fa "+this.props.faIcon}></i> {this.props.btnName}
                </button>
            )
        }

        return (
            <button className={"btn "+this.props.cName}>
                {this.props.btnName}
            </button>
        )
    }
}

export default Btn;