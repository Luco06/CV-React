import React, { useState } from 'react';
import Github from '../../assets/images/github.png';
import Linkedin from '../../assets/images/linkedin.png';
import './footer.scss';
import Contact from './contact';

function Footer() {
    const [title1, setTitle1] = useState('Contact');
    const [title2, setTitle2] = useState('Envoyez-moi un message');
    const [title3, setTitle3] = useState('Mes réseaux');
    const [copyright, setCopyright] = useState('© 2021 by Luc-Olivier YOHAN');
    return (
        <React.Fragment>
            <div className="footer_box" id="contact">
                <div className="footer_title">
                    <div className="barre_gauche"></div>
                    <h2 className="footer_h2">{title1}</h2>
                    <div className="barre_droite"></div>
                </div>
                <div className="footer_duo">
                    <div className="footer_email">
                        <h3 className="footer_h3">{title2}</h3>
                        <Contact />
                    </div>
                    <div className="footer_reseaux">
                        <h3 className="footer_h3">{title3}</h3>
                        <div className="footer_img">
                            <a href="https://fr.linkedin.com/in/luc-olivier-yohan-837073159">
                                <img src={Linkedin} alt="" />
                            </a>
                            <a href="https://github.com/Luco06">
                                <img src={Github} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <p className="footer_copyR">{copyright}</p>
            </div>
        </React.Fragment>
    );
}
export default Footer;