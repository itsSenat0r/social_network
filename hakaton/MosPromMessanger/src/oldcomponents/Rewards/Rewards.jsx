import { Routes, Route, Link } from 'react-router-dom';
import './Rewards.css';

const Rewards = (props) => {
    return (
        <div className="Rewards_Container">
            <div className='Rewards_Profile'>
                <img src={props.ProfilePicture} alt='фотография профиля'/>
                <h3>{props.ProfileNickname}</h3>
                <div className='rewards_border'></div>
                <div className='Rewards_Level_Container'>
                    <p className='Rewards_Level'>{props.ProfileLevel}</p>
                    <progress value={props.LevelProgress}></progress>
                    <p className='Rewards_XP'>{props.ProfileXP}</p>
                </div>
            </div>
            <div className="Quests_Container">
                <Link to='/rewards/quests'>
                    <p>квесты</p>
                </Link>
                <Link to='/rewards/medals'>
                    <p>медали</p>
                </Link>
            </div>
        </div>
    )
}

export default Rewards;