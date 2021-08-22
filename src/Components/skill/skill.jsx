import React from 'react';
import './skill.scss';
import angular from '../../assets/images/angular.png';
import boots from '../../assets/images/boots.png';
import css from '../../assets/images/css.png';
import html from '../../assets/images/html.png';
import java from '../../assets/images/java.png';
import js from '../../assets/images/js.png';
import mysql from '../../assets/images/mysql.png';
import php from '../../assets/images/php.png';
import ps from '../../assets/images/ps.png';
import py from '../../assets/images/py.png';
import react from '../../assets/images/react.png';
import sass from '../../assets/images/sass.png';
import vue from '../../assets/images/vue.png';


class Skill extends React.Component {
    state = {
        title: "Skills"
    }
    render() {
        return (
            <React.Fragment>
                <div className="skill_title">
                    <div className="barre_gauche"></div>
                    <h2 className='skill_h2'>{this.state.title}</h2>
                    <div className="barre_droite"></div>
                </div>
                    <div className="skill_items">

                        <img src={angular} alt=""/>
                        <img src={boots} alt=""/>
                        <img src={css} alt=""/>

                        <img src={vue} alt=""/>
                        <img src={react} alt=""/>
                        <img src={mysql} alt=""/>

                        <img src={php} alt=""/>
                        <img src={py} alt=""/>
                        <img src={html} alt=""/>

                        <img src={sass} alt=""/>
                        <img src={java} alt=""/>

                        <img src={js} alt=""/>
                        <img src={ps} alt=""/>
                    </div>
            </React.Fragment>
        );
    }
}

export default Skill;