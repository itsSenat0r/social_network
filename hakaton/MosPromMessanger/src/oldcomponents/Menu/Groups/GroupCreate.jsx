import './GroupCreate.css'

const GroupCreate = () => {
    const avatarId = useId()
    const createId = useId()
    return (
        <div className="GroupCreatePage_Container">
            <div className="GroupCreatePage">
                <div className="GroupCreatePage">
                    <input className="GroupNameInput" type='text'>Название предприятия</input>
                    <label htmlFor={avatarId}>
                        <input id={avatarId} style={"display: none"} type='file'>Аватар</input>
                    </label>
                    <input className='GroupDescription' type='text'>Описание предприятия</input>
                    <label htmlFor={createId}>
                        <input id={createId} style={'display: none'} type='submit'>Создать группу</input>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default GroupCreate;