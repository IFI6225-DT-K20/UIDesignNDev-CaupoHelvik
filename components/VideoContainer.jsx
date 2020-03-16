import React from 'react';
import Btn from './Button.jsx';
import "../css/video-container.scss";

class VideoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //...
        }
    }

    render() {
        return (
            <div className={"video-container"}>
                <div className={"videoplayer-container"}>
                    <video className={"background-video"} loop="" muted="" autoPlay="">
                        <source src="https://player.vimeo.com/external/227251510.sd.mp4?s=44347584b9ef743be9e18bab02b2db8b5661ef96&amp;profile_id=165" type="video/mp4"></source>
                    </video>
                </div>
                <div className={"main-container"}>
                <div className={"video-description"}>
                    <h1>Welcome to the Barbican</h1>
                    <p>A world-class arts and learning center, the Barbican pushes the boundaries of all major art forms including dance, film, music, theatre and visual arts.</p>
                    <Btn faIcon={"fa-calendar"} cName={"orange-btn"} btnName={"Event calendar"}></Btn>
                </div>
                </div>
            </div>
        )
    }
}

export default VideoContainer;