import React from 'react';
import './navigation.scss';

function Navigation (props){
    return(
        <nav>
           <ul>
               <li> <a href="#">A propos</a> </li>
               <li> <a href="#">Réalisation</a> </li>
               <li> <a href="#">Skill</a> </li>
               <li> <a href="#">Contact</a> </li>
           </ul>
        </nav>
    );
}
export default Navigation;