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
        switch(this.props.subSection) {
            case "lowest": {
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
            case "directions": {
                return (
                    <div className={"section " + this.props.backName + " " + this.props.subSection}>
                        <div className={"main-container"}>
                            <h2>Directions</h2>

                            <ul className="tabs">
                                {this.renderCategoryNames(this.props.tabs)}
                            </ul>

                            <div id={"map"} className={"d-inline-block"}>
                                <img src={"/css/images/map.JPG"} alt={"Not a barbican location"}/>
                            </div>

                            <div className="map-description d-inline-block active" id={"getting-here"}>
                                <h3>Location</h3>
                                <p>
                                    Barbican Centre<br/>
                                    Silk Street, London<br/>
                                    EC2Y 8DS
                                </p>

                                <p><span id={"box-office"}>Box Office: </span><span>020 7638 8891</span></p>

                                <p><strong>The Barbican Centre is open:</strong></p>
                                <p>
                                    Mon–Sat: 9am–11pm<br/>
                                    Sun: 11am–11pm
                                </p>

                                <p><a href={"https://web.archive.org/web/20200213144100/https://www.barbican.org.uk/your-visit/getting-here/opening-hours"}>See our opening hours for other venues.</a></p>

                            </div>
                            <div className="map-description d-inline-block" id={"public-transport"}>
                                <h3>Nearby public transport</h3>
                                <p>We are within walking distance from a number of London Underground stations, the closest being Barbican, St Paul’s and Moorgate. The nearest train stations are Liverpool Street and Farringdon. Bus Route 153 runs directly past the Barbican along Chiswell Street. Plan your journey and find more information about getting to the Barbican on our '<a to={"https://web.archive.org/web/20200213144100/https://www.barbican.org.uk/your-visit/getting-here/map-directions"}>Your Visit</a>' pages.</p>
                                <p>We have free bicycle spaces and paid <a to={"https://web.archive.org/web/20200213144100/https://www.barbican.org.uk/your-visit/getting-here/car-parking"}>car parking spaces</a> available</p>
                            </div>
                        </div>
                    </div>
                );
            }
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

    setActiveTab(tabName) {
        let containers = document.querySelectorAll(".map-description");

        for(let i = 0, item; item = containers[i]; i++) {
            item.classList.remove("active");
        }

        let tabs = document.querySelectorAll(".tab");
        for(let i = 0, item; item = tabs[i]; i++) {
            item.classList.remove("active");
        }

        tabName = tabName.toLowerCase().replace(" ", "-");
        let activeContainer = document.querySelector("#"+tabName);
        let activeTab = document.querySelector(".tab-"+tabName);
        if(activeContainer !== undefined && activeContainer !== null) {
            activeContainer.classList.add("active");
        }
        if(activeTab !== undefined && activeTab !== null) {
            activeTab.classList.add("active");
        }
    }

    checkActiveTab(tabName) {
        let activetab = this.props.activeTab.toLowerCase().replace(" ", "-");
        tabName = tabName.toLowerCase().replace(" ", "-");
        console.log(activetab, tabName, (activetab == tabName));
        if(activetab == tabName) {
            return "active";
        }
        return "";
    }

    renderCategoryNames = tabs => {
        return tabs.map(tabName => {
            let loweredTabName = tabName.toLowerCase().replace(" ", "-");
            return (
                <li
                    key={tabName}
                    className={"tab tab-"+loweredTabName+" "+this.checkActiveTab(tabName)}
                    onClick={() => this.setActiveTab(tabName)}
                >
                    <p>{tabName}</p>
                </li>
            );
        });
    };
}

export default Section;