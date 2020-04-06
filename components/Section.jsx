import React from 'react';
import Btn from './Button.jsx';
import "../css/section.scss";

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if(this.props.subSection == "lowest") {
            return (
                <div className={"section " + this.props.backName}>
                    <div className={"main-container d-flex"}>
                        <div className={"quarter-block"}>
                            <img className={"newsletter"} src={"/css/images/newsletters.png"} />
                        </div>
                        <div className={"quarter-block newsletter-block"}>
                            <h2>Sign up to our newsletter</h2>
                            <ul>
                                <li><svg viewBox="39.8 359.2 760.2 600.8" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M680 359.2L320 720 160 560 39.8 680.1 160 800l160 160 480-480z"></path></svg> Be the first to hear before events go on sale</li>
                                <li><svg viewBox="39.8 359.2 760.2 600.8" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M680 359.2L320 720 160 560 39.8 680.1 160 800l160 160 480-480z"></path></svg> Get the latest news from the Barbican</li>
                                <li><svg viewBox="39.8 359.2 760.2 600.8" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M680 359.2L320 720 160 560 39.8 680.1 160 800l160 160 480-480z"></path></svg> Choose the types of events that interests you</li>
                            </ul>
                        </div>
                        <div className={"quarter-block va-middle ta-center"}>
                            <Btn faIcon={"fa-arrow-right"} cName={"white-btn"} btnName={"Sign up"}></Btn>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className={"section " + this.props.backName}>
                <div className={"main-container"}>
                todo section configurability
                    [{this.props.backName}]<br/>
                </div>
            </div>
        )
    }
}

export default Section;