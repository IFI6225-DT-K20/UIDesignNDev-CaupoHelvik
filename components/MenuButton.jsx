import React from 'react';
import "../css/menu-button.scss";

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if(this.props.dropDownItems) {
            return (
                <div className={"menu-button"}>
                    {this.props.buttonLabel} <i className={"fa fa-angle-down"}></i>
                    <i className={"fa fa-angle-up"}></i>

                    <div className={"menu-dropdown-items"}>
                        TODO
                    </div>
                </div>
            )
        }

        return (
            <div className={"menu-button"}>
                {this.props.buttonLabel}

                <div className={"menu-dropdown-items"}>
                    TODO
                </div>
            </div>
        )
    }
}

export default MenuButton;