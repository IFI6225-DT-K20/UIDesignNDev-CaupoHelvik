import React from 'react';
import Btn from './Button.jsx';
import MenuButton from './MenuButton.jsx';
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
            <>
            <div className={"header-container " + this.props.backName}>
                <div className={"main-container"}>
                    <div className={"upper-header"}>
                        <div className={"left-u-header"}>
                            <Link className={"icon-link"} to="/">barbican</Link>
                        </div>
                        <div className={"right-u-header"}>
                            <div className={"search-input"}>
                                <input type={"text"} placeholder={"Search site"} />
                                <Btn faIcon={"fa-search"} cName={"transparent-back"}><i className="fas fa-search"></i></Btn>
                            </div>
                            <Link to="/"><i className="fas fa-user"></i> Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"header-container menu-line " + this.props.backName}>
                <div className={"main-container"}>
                    <div className={"lower-header"}>
                        <MenuButton buttonLabel={"What's new"} dropDownItems={"todo"}/>
                        <MenuButton buttonLabel={"Your visit"} dropDownItems={"todo"}/>
                        <MenuButton buttonLabel={"Join & support"} dropDownItems={"todo"}/>
                        <MenuButton buttonLabel={"Take part"} dropDownItems={"todo"}/>
                        <MenuButton buttonLabel={"Our story"} dropDownItems={"todo"}/>
                        <MenuButton buttonLabel={"Hire"} dropDownItems={"todo"}/>
                        <MenuButton buttonLabel={"Read, watch & listen"}/>
                        <MenuButton buttonLabel={"Shop"}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default HeaderMenu;