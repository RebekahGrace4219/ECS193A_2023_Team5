
const OwnerSelect = (props) => {
    return(
        <div>
            <select onChange = {props.leagueReact}>
                <option value = "delete">Delete League</option>
            </select>
        </div>
    )

}

export default OwnerSelect;