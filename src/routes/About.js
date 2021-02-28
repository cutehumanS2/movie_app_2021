/*개발자 소개 화면*/
import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about_container">
            <span>
                멋진 삶을 살자~*~*
            </span>
            <span>- 아직 덜 멋진 최가희</span>
         </div>
    );
}

export default About;