import React from 'react';
import Btn from './Button.jsx';
import { Link } from "react-router-dom";
import "../css/header-menu.scss";

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className={"header-container " + this.props.backName}>
                <div className={"main-container"}>
                <div className={"upper-header"}>
                    <div className={"left-u-header"}>
                        <Link to="/">barbican</Link>
                    </div>
                    <div className={"right-u-header"}>
                        <div className={"search-input"}>
                            <input placeholder={"Search site"} />
                            <Btn><i className="fas fa-search"></i></Btn>
                        </div>
                        <Link to="/"><i className="fas fa-user"></i> Log in</Link>
                    </div>
                </div>
                <div className={"lower-header"}>

                </div>
                </div>
            </div>
        )
    }
}

export default HeaderMenu;