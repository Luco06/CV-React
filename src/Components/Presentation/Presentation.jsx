import React from 'react';
import './presentation.scss';

class Presentation extends React.Component {
    state = {
        title1: 'A propos de moi',
        title2: "I'm a developper !",

    }
    render() {
        return (
            <React.Fragment>
                <div className="prez" id="prez">

                    <div className="propos">
                        <div className="barre_gauche"></div>
                        <h2 className="prez_h2">{this.state.title1}</h2>
                        <div className="barre_droite"></div>
                    </div>
                    <h3 className="prez_h3">{this.state.title2}</h3>
                    <p className="prez_p">
                        Issu de l'hôtellerie-restauration et de la vente,
                        je me suis découvert une nouvelle passion..."Le Code" et plus précisément tout ce qui touche au front-end.
                        La cuisine m'a permis de développer mon côté créatif, l'esprit d'équipe ainsi que d'apprendre à gérer le stress dû aux moments de rush.
                        La vente m'a quant à elle permis de développer mon relationnel: "Que des solutions pour nos clients !"
                        Je pense que ces deux expériences m'ont permis d'améliorer mes conditions d'apprentissage
                        en tant que développeur web et d'être concentré et persévérant dans tout ce que j'entreprends.
                </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Presentation;