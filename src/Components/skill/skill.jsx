import React from 'react';

class Skill extends React.Component {
    state = { 
        title: "Skills"
     }
    render() { 
        return ( 
            <React.Fragment>
                <h2>{this.state.title}</h2>
            </React.Fragment>
         );
    }
}
 
export default Skill;