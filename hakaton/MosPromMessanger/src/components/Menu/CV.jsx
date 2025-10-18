import './CV.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CV = (props) => {
    return (
        <div className="CV_Container">
            <div className='CV_Card'>
                <div className='CV_Card_Header'>
                    <img src={props.CVAvatar} alt='cv avatar'/>
                    <div className='CV_Card_Personal_Container'>
                        <h3>{props.CVNameSurname}</h3>
                        <p>{props.CVDateOfBirthday}</p>
                    </div>
                </div>
                <div className='CV_Card_Body'>
                    <h3>О себе</h3>
                    <p>{props.CVAboutMe}</p>
                    <h3>Компетенции</h3>
                    <p>{props.CVCompetencies}</p>
                </div>
                <div className='border'></div>
                <div className='CV_Card_Footer'>
                    <h3>Достижения:</h3>
                    {[props.CVRewards].map((rewards, index) => 
                        <Link key={index} to={rewards.RewLink}>
                            <img src={rewards.RewImg}/>
                            <h4>{rewards.RewName}</h4>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CV;