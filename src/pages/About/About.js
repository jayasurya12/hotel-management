import React from 'react'
import {Navbar} from '../../components/Navbar'
import style from './about.module.css';
import img from '../../img/img2.jpg'
const About = () => {
    return (
        <div>
            <Navbar/>
            <div className={style.about}>
            <img src={img} alt=''/>
            </div>
        </div>
    )
}

export default About
