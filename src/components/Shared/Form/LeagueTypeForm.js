
const LeagueTypeForm = (props) => {
    function updateLeagueType(event){
        props.updateLeagueType(event.target.value);
    }

    return(
        <div className="formObj">
            <h2>League Type</h2>
            <p className="formObjInner">In a private league, you the owner, will have to accept join requests.</p>
            <p className="formObjInner">In a public league, anyone can join</p>
            <select className = "formSelect" onChange={updateLeagueType} defaultValue={props.defaultValue}>
                <option value = "private">Private</option>
                <option value = "public">Public</option>
            </select>
        </div>
    );
}

export default LeagueTypeForm;