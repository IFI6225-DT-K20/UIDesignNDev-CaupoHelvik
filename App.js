import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import VideoContainer from './components/VideoContainer.jsx';
import Section from './components/Section.jsx';

class App extends Component{
    render() {
        return(
            <div>
                <Header/>
                <VideoContainer/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}
export default App;