import React from 'react';
import './realisation.scss'
import cartier from '../../assets/images/cartier.png';
import femacom from '../../assets/images/femacom.png';
import tim from '../../assets/images/timberlande.png';
import jo from '../../assets/images/jo.png';


class Realisation extends React.Component {
    state = {
        title: "Réalisations",
        Github: 'https://github.com/Luco06'
    }
    render() {
        return (
            <React.Fragment>
                <div className="rea_box">
                    <div className="rea_title">
                        <div className="barre_gauche"></div>
                        <h2 className="rea_h2">{this.state.title}</h2>
                        <div className="barre_droite"></div>
                    </div>
                    <div className="rea_txt">
                        <p>Certains de mes projets ont été réalisés dans le cadre de ma formation.</p>
                        <p>Retrouvez-les et plus encore sur mon <a href={this.state.Github}>Github</a></p>
                    </div>
                    <div className="rea_items">
                        <img className="rea_img" src={cartier} alt=""/>
                        <img className="rea_img" src={femacom} alt=""/>
                        <img className="rea_img" src={jo} alt=""/>
                        <img className="rea_img" src={tim} alt=""/>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Realisation;