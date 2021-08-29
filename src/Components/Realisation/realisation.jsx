import React from 'react';
import './realisation.scss'
import cartier from '../../assets/images/cartier.png';
import femacom from '../../assets/images/femacom.png';
import tim from '../../assets/images/timberlande.png';
import jo from '../../assets/images/jo.png';
import itinelib from '../../assets/images/itinelib_img.png';


class Realisation extends React.Component {
    state = {
        title: "Réalisations",
        Github: 'https://github.com/Luco06'
    }
    render() {
        return (
            <React.Fragment>
                <div className="rea_box">
                    <div className="rea_title" id="rea">
                        <div className="barre_gauche"></div>
                        <h2 className="rea_h2">{this.state.title}</h2>
                        <div className="barre_droite"></div>
                    </div>
                    <div className="rea_txt">
                        <p>Certains de mes projets ont été réalisés dans le cadre de ma formation.</p>
                        <p>Retrouvez-les et plus encore sur mon <a href={this.state.Github}>Github</a></p>
                    </div>
                    <div className="rea_items">

                        <div className="item1">
                            <img className="rea_img1" src={cartier} alt="" />
                        </div>

                        <div className="item2">
                            <img className="rea_img2" src={femacom} alt="" />
                        </div>

                        <div className="item3">
                            <img className="rea_img3" src={jo} alt="" />
                        </div>

                        <div className="item4">
                            <img className="rea_img4" src={tim} alt="" />
                        </div>
                        <div className="item5">
                            <a href="https://itinelib.surge.sh/">
                                <img className="rea_img5" src={itinelib} alt="" />
                            </a>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Realisation;