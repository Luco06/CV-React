import React, { useState } from 'react';
import './skill.scss';

const LogoSkill1 = [
    {
        id: 1,
        image: "https://i.ibb.co/8212xYC/angular.png"
    },
    {
        id: 2,
        image: "https://i.ibb.co/r0DMCXv/css.png"
    },
    {
        id: 3,
        image: "https://i.ibb.co/wRhXxyB/html.png"
    },
    {
        id: 4,
        image: "https://i.ibb.co/tBV1C9K/java.png"

    }
]
const LogoSkill2 = [

    {
        id: 5,
        image: "https://i.ibb.co/BKv3K9G/js.png"

    },
    {
        id: 6,
        image: "https://i.ibb.co/cwgyj5z/mysql.png"

    },
    {
        id: 7,
        image: "https://i.ibb.co/VjC6g7G/Nodejs.png"

    },
    {
        id: 8,
        image: "https://i.ibb.co/k8pP6cw/php.png"

    }
]
const LogoSkill3 = [
    {
        id: 9,
        image: "https://i.ibb.co/KFM9Xdv/ps.png"

    },
    {
        id: 10,
        image: "https://i.ibb.co/NpH8r4W/py.png"

    },
    {
        id: 11,
        image: "https://i.ibb.co/Sx1PHyp/react.png"

    },

]
const LogoSkill4 = [

    {
        id: 12,
        image: "https://i.ibb.co/yPjPXTc/sass.png"

    },
    {
        id: 13,
        image: "https://i.ibb.co/K53ccBJ/vue.png"

    }
]
function Skill() {
    const [title, setTitle] = useState('Skill')

    return (
        <React.Fragment>
            <div className="skill_title" id="skill">
                <div className="barre_gauche"></div>
                <button className="btn_skill"><h2 className='skill_h2'>{title}</h2></button>
                <div className="barre_droite"></div>
            </div>
            <div className="skill_items" >

                <div className="item1">
                    {LogoSkill1.map(({ id, image }) => (
                        <img className="img_item1" key={id} src={image} alt="skillLogo" />
                    ))}
                </div>
                <div className="item2">
                    {LogoSkill2.map(({ id, image }) => (
                        <img className="img_item2" key={id} src={image} alt="skillLogo" />
                    ))}
                </div>
                <div className="item3">
                    {LogoSkill3.map(({ id, image }) => (
                        <img className="img_item3" key={id} src={image} alt="skillLogo" />
                    ))}
                </div>
                <div className="item4">
                    {LogoSkill4.map(({ id, image }) => (
                        <img className="img_item4" key={id} src={image} alt="skillLogo" />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skill;