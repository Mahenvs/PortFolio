import React from 'react'
import './About.css';
import cover_pic from "../assets/about_pic.jpg";

function About() {
  return <>
  <div className="about_profile">
    <div className="about">
        <h1>Contact</h1>
        <span>Looking forward to hearing from you:)</span>
        <h3>Phone</h3><span>+918598779465</span>
        <h3>Email</h3><span>vamshikrishna@gmail.com</span>
        <h3>LinkedIn</h3><span>https://www.linkedin.com/in/u-vams-09214174/</span>
        <h3>Github</h3><span>https://www.github.com/in/214174/</span>
    </div>

            <div className="contet_img">
                <img src={cover_pic} alt="Profile_Pic" />
</div></div>
    
  </>
}

export default About
