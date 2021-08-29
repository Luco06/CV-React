import React from 'react';
import './navigation.scss';


function Navigation (props){
    return(
        <nav className="nav_navigation">
           <ul className="ul_navigation">
               <li className="li_navigation">  <a className="a_navigation" href="#prez">A propos</a> </li>
               <li className="li_navigation">  <a className="a_navigation" href="#rea">Réalisations</a> </li>
               <li className="li_navigation">  <a className="a_navigation" href="#skill">Skills</a> </li>
               <li className="li_navigation">  <a className="a_navigation" href="#contact">Contact</a> </li>
           </ul>
        </nav>
    );
}
export default Navigation;