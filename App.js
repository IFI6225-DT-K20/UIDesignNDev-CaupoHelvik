import React, { Component } from 'react';
import HeaderMenu from './components/HeaderMenu.jsx';
import Footer from './components/Footer.jsx';
import VideoContainer from './components/VideoContainer.jsx';
import Section from './components/Section.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

class App extends Component{
    render() {
        return(
            <div>asd
                <ErrorBoundary>
                    <HeaderMenu/>
                    <VideoContainer/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}
export default App;