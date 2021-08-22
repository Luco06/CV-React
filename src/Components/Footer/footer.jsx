import React from 'react';
import Github from '../../assets/images/github.png';
import Linkedin from '../../assets/images/linkedin.png';
import './footer.scss';

class Footer extends React.Component {
    state = {
        title1: 'Contact',
        title2: 'Envoyez-moi un message',
        title3: 'Mes réseaux',
        copyright: '© 2021 by Luc-Olivier YOHAN'

    }
    render() {
        return (
            <React.Fragment>
                <div className="footer_box">

                    <div className="footer_title">
                        <div className="barre_gauche"></div>
                        <h2 className="footer_h2">{this.state.title1}</h2>
                        <div className="barre_droite"></div>
                    </div>

                    <div className="footer_duo">

                        <div className="footer_email">
                            <h3 className="footer_h3">{this.state.title2}</h3>
                            <form action="" className="footer_form">
                                <input type="text" placeholder="Prénom/Nom" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Sujet" />
                                <textarea name="msg" id="" cols="18" rows="5"></textarea>
                                <input type="submit" value="Envoyer" />
                            </form>
                        </div>

                        <div className="footer_reseaux">
                            <h3 className="footer_h3">{this.state.title3}</h3>
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
                    <p className="footer_copyR">{this.state.copyright}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;