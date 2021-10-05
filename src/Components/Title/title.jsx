import React from 'react';
import kelu from '../../assets/images/kelu.png';
import './title.scss';


function Title() {
    return (
        <React.Fragment>
            <div className="title_img">
                <img className="img_title" src={kelu} alt="" />
            </div>
        </React.Fragment>
    );
}

export default Title;