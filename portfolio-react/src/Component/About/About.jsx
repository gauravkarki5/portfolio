import React from 'react'
import './About.css'
import theme_parttern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_parttern} alt="" />
        </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an exprienced Frontend Developer With over a decade of professional expertise in the field.Throughout my career,i have had the privilege of collaborating with pretigious organizations,contributing to their success and growth.
                </p>
                <p>My passion for frontend development is not only reflected in my extensive exprience but also in the enthusiasm and dedication i bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievment">
            <h1>2+</h1>
            <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>2+</h1>
            <p>HAPPY CLINTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
