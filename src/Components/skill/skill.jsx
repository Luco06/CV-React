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
import node from '../../assets/images/Nodejs.png';



class Skill extends React.Component {
    state = {
        title: "Skills"
    }
    render() {
        return (
            <React.Fragment>
                <div className="skill_title">
                    <div className="barre_gauche"></div>
                    <button className="btn_skill"><h2 className='skill_h2'>{this.state.title}</h2></button>
                    <div className="barre_droite"></div>
                </div>
                    <div className="skill_items" >

                        <div  className="item1">
                        <img className="img_item1" src={angular} alt="Angular"/>
                        <img className="img_item1" src={boots} alt="Bootstrap"/>
                        <img className="img_item1" src={css} alt="Css"/>
                        </div>

                        <div   className="item2">
                        <img className="img_item2"  src={vue} alt="Vue.js"/>
                        <img className="img_item2"  src={react} alt="React"/>
                        <img className="img_item2"  src={mysql} alt="Mysql"/>
                        </div>

                        <div  className="item3">
                        <img className="img_item3" src={php} alt="PHP"/>
                        <img className="img_item3" src={py} alt="Python"/>
                        <img className="img_item3" src={html} alt="HTML"/>
                        </div>

                        <div  className="item4">
                        <img className="img_item4" src={sass} alt="SASS"/>
                        <img className="img_item4" src={java} alt="Java"/>
                        <img className="img_item4" src={node} alt="Node.Js"/>
                        </div>

                        <div  className="item5">
                        <img className="img_item5" src={js} alt="Javascript"/>
                        <img className="img_item5" src={ps} alt="PhotoShop"/>
                        </div>


                    </div>
            </React.Fragment>
        );
    }
}

export default Skill;