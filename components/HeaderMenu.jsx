import React from 'react';
import Btn from './Button.jsx';
import { Link } from "react-router-dom";

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className={"header-container"}>
                <div className={"upper-header"}>
                    <div className={"left-u-header"}>
                        <Link to="/">barbican</Link>
                    </div>
                    <div className={"right-u-header"}>
                        <div className={"search-input"}>
                            <input placeholder={"Search site"} />
                            <Btn>SEARCH ICON</Btn>
                        </div>
                        <Link to="/">LOGIN ICON Log in</Link>
                    </div>
                </div>
                <div className={"lower-header"}>

                </div>
            </div>
        )
    }
}

export default HeaderMenu;