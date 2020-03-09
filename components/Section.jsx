import React from 'react';
import "../css/section.scss";

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }w

    render() {
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