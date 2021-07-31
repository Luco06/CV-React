import React from 'react';
import Github from '../../assets/images/github.png';
import Linkedin from '../../assets/images/linkedin.png';

class Footer extends React.Component {
    state = { 
        title1: 'Contact',
        title2: 'Envoyez-moi un message',
        title3: 'Mes réseaux'
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="footer__email">

                </div>
                <div className="footer__resaux">
                    <img src={Github} alt=""/>
                    <img src={Linkedin} alt=""/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;