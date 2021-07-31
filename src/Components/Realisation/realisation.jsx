import React from 'react';

class Realisation extends React.Component {
    state = { 
        title: "Réalisation",
        Github: 'https://github.com/Luco06'
     }
    render() { 
        return ( 
            <React.Fragment>
                <h2>{this.state.title}</h2>
                <p>Certains de mes projets ont été réalisés dans le cadre de ma formation.</p>
                <p>Retrouvez-les et plus encore sur mon <a href={this.state.Github}>Github</a></p>
            </React.Fragment>
         );
    }
}
 
export default Realisation;