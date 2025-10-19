import './Medals.css'

const Medals = (props) => {
    return (
        <div className="MedalsPage_Container">
            <div className='MedalsPage_Profile_Container'>
                <img src={props.ProfilePicture} alt='фотография профиля'/>
                <h3>{props.ProfileNickname}</h3>
                <div className='rewards_border'></div>
                <div className='Rewards_Level_Container'>
                    <p className='Rewards_Level'>{props.ProfileLevel}</p>
                    <progress value={0.5}></progress>
                    <p className='Rewards_XP'>{props.ProfileXP}</p>
                </div>
            </div>
            <div className='Medals_Container'>
                <div className='YourMedals_Container'>
                    {props.medals.map((medal, index) => 
                        <div key={index} className='Medal'>
                        <img src={medal.img}></img>
                        <p>{medal.name}</p>
                        </div>
                    )} 
                </div>
                <div className='Medals_Quests_Container'>
                    {props.quests.map((quest, index) => 
                        <div key={index} className='Medal_Quest'>
                            <h1 className='Medal_Quest_Name'>{quest.name}</h1>
                            <p className='Medal_Quest_Description'>{quest.description}</p>
                            <h3 className='Medal_Quest_Reward'>Награда: {quest.reward}</h3>
                        </div>
                    )}    
                </div>    
            </div>
        </div>
    )
}

export default Medals;