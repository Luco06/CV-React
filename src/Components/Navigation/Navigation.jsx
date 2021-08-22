import React from 'react';
import './navigation.scss';

function Navigation (props){
    return(
        <nav className="nav_navigation">
           <ul className="ul_navigation">
               <li className="li_navigation">  <a className="a_navigation" href="#">A propos</a> </li>
               <li className="li_navigation">  <a className="a_navigation" href="#">Réalisation</a> </li>
               <li className="li_navigation">  <a className="a_navigation" href="#">Skill</a> </li>
               <li className="li_navigation">  <a className="a_navigation" href="#">Contact</a> </li>
           </ul>
        </nav>
    );
}
export default Navigation;