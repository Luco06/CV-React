import React from 'react';
import kelu from '../../assets/images/kelu.png';


class Title extends React.Component {
    state = { 
     }
    render() { 
        return ( 
            <React.Fragment>
                <img src={kelu} alt=""/>
                <h1>Hello</h1>

            </React.Fragment>
         );
    }
}
 
export default Title;