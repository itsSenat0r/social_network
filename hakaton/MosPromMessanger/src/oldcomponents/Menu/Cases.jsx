import './Cases.css';

const Cases = (props) => {
    return (
        <div className="Cases_Container">
            <div className='Cases_InWork_Container'>
                <img src={props.CaseAutorImg} alt='case autor avatar'></img>
                <div>
                    <div>
                        <h3>Компания:</h3>
                        <p>{props.CaseAutorName}</p>
                    </div>
                    <div>
                        <h3>Кейс:</h3>
                        <p>{props.CaseThumbnailInShort}</p>
                    </div>
                </div>
            </div>
            <div className='Cases_Completed_Container'>
                {[props.CompletedCases].map((casee, index) =>
                    <div key={index} className='CompletedCase'>
                        <img src={casee.CaseAutorImg} alt='case autor avatar'></img>
                        <div>
                            <div>
                                <h3>Компания:</h3>
                                <p>{casee.CaseAutorName}</p>
                            </div>
                            <div>
                                <h3>Кейс:</h3>
                                <p>{casee.CaseThumbnailInShort}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cases;