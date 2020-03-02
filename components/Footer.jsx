import React from 'react';
import { Link } from "react-router-dom";
import "../css/footer.scss";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //...
        }
    }

    render() {
        return (
            <div className={"footer-container"}>
                <h3>Footer</h3>
                <div className={"row"}>
                    <div className={"half-block"}>
                        About DROPDOWN Your booking
                    </div>
                    <div className={"half-block"}>
                        <h4>Contact the Box office</h4>
                        <p>For queries relating to your booking, please use <Link to={"/"}>our FAQs</Link> or contact us on:</p>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"half-block"}>

                    </div>
                    <div className={"half-block"}>
                        <div className={"half-block"}>
                            <h4>EMAIL ICON tickets@barbican.org.uk</h4>
                            <p>We aim to respond withing 24 hrs</p>
                        </div>
                        <div className={"half-block"}>
                            <h4>PHONE ICON 020 7638 8891</h4>
                            <p><Link to={"/"}>Opening times</Link> INFO_WITH_CIRCLE_LOGO</p>
                        </div>
                    </div>
                </div>
                <div className={"row light-gray-border"}>
                    <div className={"quarter-block"}>
                        CITY OF LONDON CORP LOGO
                    </div>
                    <div className={"quarter-block"}>
                        Centre partner CHRISTIE LOGO
                    </div>
                    <div className={"quarter-block"}>

                    </div>
                    <div className={"quarter-block"}>
                        FB LOGO, TWITR LOGO, INSTA LOGO
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"half-block"}>
                        <Link to={"/"}>Careers</Link>
                        <Link to={"/"}>Press room</Link>
                        <Link to={"/"}>Privacy</Link>
                        <Link to={"/"}>Terms & conditions</Link>
                    </div>
                    <div className={"half-block"}>
                        © 2020 Barbican Centre, Silk Street, London, EC2Y 8DS
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;