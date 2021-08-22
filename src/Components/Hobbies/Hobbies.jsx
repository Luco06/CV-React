import React from 'react';
import Cv from '../../assets/cv-luc.pdf';
import bd from '../../assets/images/bd.png';
import capoeira from '../../assets/images/capoeira.png';
import jeux from '../../assets/images/jeux.png';
import cuisine from '../../assets/images/cuisine.png';
import './hobbies.scss';

class Hobbies extends React.Component {

    state = {
        title1: 'Mes hobbies',
        items: [
            bd,
            cuisine,
            capoeira,
            jeux
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="hobbies">

                    <div className="hob">
                        <div className="barre_gauche"></div>
                        <h2 className="hobbies_h2">{this.state.title1}</h2>
                        <div className="barre_droite"></div>
                    </div>

                    <div className="slider">
                        <img src={bd} alt="" className="slide" />
                        <img src={capoeira} alt="" className="slide" />
                        <img src={jeux} alt="" className="slide" />
                        <img src={cuisine} alt="" className="slide" />
                    </div>

                    <p className="hobbies_p">
                        <a className="hobbies_a" href={Cv}>Telecharger mon CV</a>
                    </p>
                </div>

            </React.Fragment>
        );
    }
}


export default Hobbies;