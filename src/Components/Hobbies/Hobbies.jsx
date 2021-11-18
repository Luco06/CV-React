import React, { useState } from 'react';
import Cv from '../../assets/cv-luc.pdf';
import Slider from './Slider'
import 'react-slideshow-image/dist/styles.css';
import './hobbies.scss';
import 'react-slideshow-image/dist/styles.css';

function Hobbies() {

    const [title1, setTitle1] = useState('Mes hobbies')
    return (
        <React.Fragment>
            <div className="hobbies">

                <div className="hob">
                    <div className="barre_gauche"></div>
                    <h2 className="hobbies_h2">{title1}</h2>
                    <div className="barre_droite"></div>
                </div>
                <div className="slider"  >
                    <Slider />
                </div>
                {/* <p className="hobbies_p">
                    <a className="hobbies_a" href={Cv}>Telecharger mon CV</a>
                </p> */}
            </div>

        </React.Fragment>
    );
}

export default Hobbies;