import React, { Component } from 'react';
import HeaderMenu from './components/HeaderMenu.jsx';
import Footer from './components/Footer.jsx';
import VideoContainer from './components/VideoContainer.jsx';
import Section from './components/Section.jsx';

class App extends Component{
    render() {
        return(
            <div>
                <HeaderMenu backName={"background-orange"} />
                <VideoContainer/>
                <Section backName={"background-white"} />
                <Section backName={"background-white"} />
                <Section backName={"background-white"} />
                <Section backName={"background-white"} subSection={"directions"} tabs={["Getting here", "Public transport"]} activeTab={"getting-here"} />
                <Section backName={"background-orange"} subSection={"lowest"} />
                <Footer backName={"background-dark"}/>
            </div>
        );
    }
}
export default App;