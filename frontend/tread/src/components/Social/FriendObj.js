

const FriendObj = (props) => {
    return(
        <div id = "FriendObj">
            <div>
                <img src = {props.profilePhoto}/>
            </div>
            <div>
                <p>{props.displayName}</p>
                <p>{props.username}</p>
            </div>
            <div>
                <button>
                    <img src = ""/>
                </button>
            </div>
        </div>
    )

}

export default FriendObj;