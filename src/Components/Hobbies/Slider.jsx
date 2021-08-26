import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bd from '../../assets/images/bd.png';
import capoeira from '../../assets/images/capoeira.png';
import jeux from '../../assets/images/jeux.png';
import cuisine from '../../assets/images/cuisine.png';

const proprietes = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <React.Fragment>
            <Fade>
                <div className="each-fade">
                    <img src={bd} alt="" />
                </div>
                <div className="each-fade">
                    <img src={capoeira} alt="" />
                </div>
                <div className="each-fade">
                    <img src={jeux} alt="" />
                </div>
                <div className="each-fade">
                    <img src={cuisine} alt="" />
                </div>
            </Fade>

        </React.Fragment>

    )
}
export default Slideshow;
