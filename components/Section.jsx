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
            case "make-the-most-of-your-visit": {
                return (<div className={"section " + this.props.backName + " " + this.props.subSection}>
                        <div className={"main-container"}>
                            <h2>Make the most of your visit</h2>

                            <div className="banners">
                                <div className="button-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.7 116.7"><path d="M58.5 116.7L74.3 101 39.9 68.8l-7.2-6.6-4.4-3.9L40 47.7l34.7-31.4L58.5 0 0 58.9z"></path></svg>
                                </div>
                                <div className={"image-blocks"}>
                                    {this.renderImageBlocks(this.props.imageBlocks)}
                                </div>
                                <div className="button-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.7 116.7"><path d="M16.2 0L.3 15.7l34.4 32.1 7.3 6.7 4.3 3.8L34.7 69 0 100.3l16.2 16.4 58.5-58.9z"></path></svg>
                                </div>
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

    renderImageBlocks = imageblocks => {
        return imageblocks.map(imageBlockData => {
            return (
                <div className={"image-block"} key={imageBlockData.blockTitle} >
                    <div className={"img-block"}><img src={imageBlockData.imgUrl} alt={imageBlockData.imageTitle}/></div>
                    {this.getImageBlockLabel(imageBlockData.imgBorderColor, imageBlockData.imageTitle)}
                    <div className={"block-description"} style={{borderColor: imageBlockData.imgBorderColor}}>
                        <p>{imageBlockData.blockTitle}</p>
                        <p>{imageBlockData.blockDescription}</p>
                    </div>
                </div>
            );
        });
    };

    getImageBlockLabel(borderColor, imgTitle) {
        if(imgTitle == "") {
            return(<></>);
        }
        return (<div className={"img-label"} style={{backgroundColor: borderColor}}>{imgTitle}</div>)
    }
}

export default Section;