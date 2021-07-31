import React from 'react';
import Cv from '../../assets/cv-luc.pdf';

class Hobbies extends React.Component {
    state = { 
        title1: 'Mes Hobbies'
     }
    render() { 
        return ( 
            <React.Fragment>
                <h2>{this.state.title1}</h2>
                <p>
                    <a href={Cv}>Telecharger mon CV</a>
                </p>
            </React.Fragment>
         );
    }
}
 
export default Hobbies;