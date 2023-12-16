import React from 'react'
import './About.css';
import cover_pic from "../assets/contact4.JPG";
import { Link } from 'react-router-dom';

function About() {
  return <>
    <div className="about">

      <div className="about_self">
        <h1 className="headerTitle">Contact</h1>
        <span>Looking forward to hearing from you:)</span>
        <h3>Phone</h3><span>+918598779465</span>
        <h3>Email</h3><span>mahendrauppari044@gmail.com</span>
        <h3>LinkedIn</h3>
        <Link to="https://www.linkedin.com/in/u-mahendra-082114174/" className='colorBlack'>

        <span>https://www.linkedin.com/in/u-mahendra-082114174/</span>
        </Link>
        <h3>Github</h3>

        <Link to="https://github.com/Mahenvs" className='colorBlack'>
          <span>https://github.com/Mahenvs</span>
          </Link>

      </div>
      <div className="content_img">
        <img src={cover_pic} alt="Profile_Pic" />
      </div>
    </div>
  </>
}

export default About
