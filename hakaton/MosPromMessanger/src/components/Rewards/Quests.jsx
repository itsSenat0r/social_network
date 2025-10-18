import './Quests.css'

const Quests = (props) => {
    return (
        <div className="QuestsPage_Container">
            <div className='QuestsPage_Profile_Container'>
                <img src={props.ProfilePicture} alt='фотография профиля'/>
                <h3>{props.ProfileNickname}</h3>
                <div className='rewards_border'></div>
                <div className='Rewards_Level_Container'>
                    <p className='Rewards_Level'>{props.ProfileLevel}</p>
                    <progress value={0.5}></progress>
                    <p className='Rewards_XP'>{props.ProfileXP}</p>
                </div>
            </div>
            <h1>Квесты</h1>
            <div className='Quests'>
                {props.quests.map((quest, index) => 
                <div key={index} className='Quest'>
                    <div className='Quest_Status'>{quest.status}</div>
                    <div className='Quest_Name'>{quest.name}</div>
                    <div className='Quest_Description'>{quest.description}</div>
                    <div className='Quest_Reward'>{quest.reward}</div>
                </div>)}
            </div>
        </div>
    )
}

export default Quests;