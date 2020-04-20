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
                <Section backName={"background-gray"} subSection={"make-the-most-of-your-visit"} imageBlocks={[
                    {imgUrl:"https://www.barbican.org.uk/sites/default/files/styles/promo_bottom_narrow_wide_superwide/public/images/2018-05/IMG_8849.JPG", imgBorderColor: "#7d95b9", imageTitle:"Tours & Public Spaces", blockTitle:"Level G", blockDescription:"Always open, always free"},
                    {imgUrl:"https://www.barbican.org.uk/sites/default/files/styles/promo_small/public/images/2017-08/TSP%20150804-117.jpg", imgBorderColor: "#ff6918", imageTitle:"", blockTitle:"Eat & drink", blockDescription:"Our cafes, restaurants and bars"},
                    {imgUrl:"https://www.barbican.org.uk/sites/default/files/styles/promo_small/public/images/2017-09/L1000904-Edit.jpg", imgBorderColor: "#ff6918", imageTitle:"", blockTitle:"Shops", blockDescription:"Design-led gifts and exclusive products"},
                    {imgUrl:"https://www.barbican.org.uk/sites/default/files/styles/promo_small/public/images/2018-06/IMG_6492.JPG", imgBorderColor: "#ff6918", imageTitle:"", blockTitle:"Library", blockDescription:"Including children's and music library"},
                ]}  />
                <Section backName={"background-white"} subSection={"directions"} tabs={["Getting here", "Public transport"]} activeTab={"getting-here"} />
                <Section backName={"background-orange"} subSection={"lowest"} />
                <Footer backName={"background-dark"}/>
            </div>
        );
    }
}
export default App;