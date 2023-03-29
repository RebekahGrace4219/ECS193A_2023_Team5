import {useState,useEffect} from 'react';
import FriendObj from './FriendObj';
import axios from 'axios';
import "../../css/Social/scroll.css";
const backend_url = process.env.REACT_APP_PROD_BACKEND;

let basic = [{displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},
    {displayName: "Jhao Hua", picture: "https://lh3.googleusercontent.com/a/AGNmyxZbozogq_2hGmHB4Bgqv-8LwaD77U6WOirsrrV6=s96-c"
    , username: "batman#6380"
    , _id
    :
    "6405c7a5b023435deb979a09"},

]
const FriendScroll = (props) => {
    let [scrollType] = useState(props.type);
    let [information, setInformation] = useState([]);

    function getFriends(){
        // get Friends
        var config = {
          method : 'post',
          url : backend_url + 'friend_list/get_all_friends_info',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log("friend" , response.data)
            setInformation(response.data);
            setInformation(basic);
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        });
    }

    function getSent(){
        // get Sents
        var config = {
          method : 'post',
          url : backend_url + 'friend_list/sent_request_list',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log(response.data)
            setInformation(response.data)
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        });
        // setInformation([[{"displayName":"Sent Requests", "username":"Batman", "profilePicture": "https://i.imgur.com/jJaPs4q.png"}]]);
    }

    function getReceived(){
        // get Received
        var config = {
          method : 'post',
          url : backend_url + 'friend_list/received_request_list',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log(response.data)
            setInformation(response.data)
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        });
      }

    function getBlocked(){
        // get Blocked
        var config = {
          method : 'post',
          url : backend_url + 'friend_list/blocked_list',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log(response.data)
            setInformation(response.data)
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        });        }

    function makeFriendObj(input){
        // console.log(input)
        return (<FriendObj type = {scrollType}>{input}</FriendObj>);
    }

    useEffect (
        () => {
            if(scrollType === "friend"){
                getFriends();
            }
            else if(scrollType === "sent"){
                getSent();
            }
            else if(scrollType === "received"){
                getReceived();
            }
            else if(scrollType === "blocked"){
                getBlocked();
            }
        }, [scrollType]
    );

    return(
        <div className = "scroll">
            {information.map(makeFriendObj)}
        </div>
    )
}

export default FriendScroll;