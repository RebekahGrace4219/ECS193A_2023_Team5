import { useState, useEffect } from 'react';
import ActivityObj from './ActivityObj';
import axios from "axios";
import { setDisplayProperty } from "../../Helpers/CssEffects";
import SuggestedFriendObj from './SuggestedFriendObj';
import SuggestedLeagueObj from './SuggestedLeagueObj';
import "../../css/Social/rowBox.css";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const RowBox = (props) => {

    const [load, setLoad] = useState(false);
    const [title, setTitle] = useState("");
    const [info, setInfo] = useState([]);
    const callFunc = {
        "friend": { "Suggest": {"get": getSuggestedFriends, "create": createSuggestFriendObj},
                    "Recent": {"get": getRecentFriends, "create": createRecentObj }
                  },
        "league": { "Suggest": {"get":getSuggestedLeagues,"create":createSuggestLeagueObj},
                    "Recent": {"get":getRecentLeagues, "create":createRecentObj }}
    }

    const capital = (word) => {
        return word[0].toUpperCase() + word.substring(1);
    }

    useEffect(
        () => {
            if (props.children.informationType === "Suggest") {
                setTitle("Suggested " + capital(props.children.socialType) + "s");
            }
            else {
                setTitle("Recent " + capital(props.children.socialType) + " Activity");
            }
        }, [props.children.socialType, props.children.informationType]
    );

    useEffect(
      () => {
        if (info.length === 0) {
          setDisplayProperty(props.children.socialType + props.children.informationType + "Box", "none")
        }
        else if(info){
          setDisplayProperty(props.children.socialType + props.children.informationType + "Box", "block")
        }
      }, [info]
    );

    useEffect(
        () => {
            if (!load) {
                callFunc[props.children.socialType][props.children.informationType]["get"]();
                setLoad(true);
            }
        }, [load]
    );

    function createSuggestFriendObj (input) {
        return <SuggestedFriendObj>{input}</SuggestedFriendObj>
    }
    function createSuggestLeagueObj (input) {
        return <SuggestedLeagueObj>{input}</SuggestedLeagueObj>
    }
    function createRecentObj (input) {
        return <ActivityObj>{input}</ActivityObj>
    }

    function getSuggestedFriends() {
        var config = {
            method : 'post',
            url : backend_url + 'friend_list/get_recommended',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            setInfo(response.data)
        })
        .catch(function(error){
            console.log(error);
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });
    }

    function getSuggestedLeagues() {
        var config = {
            method : 'post',
            url : backend_url + 'league/get_recommended',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            setInfo(response.data)
        })
        .catch(function(error){
            console.log(error)
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });
    }

    function getRecentFriends() {
        var config = {
            method: 'post',
            url: backend_url + 'friend_list/get_recent_activity',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
            .then(function (response) {
                console.log("The recent activity friend looks like: ", response.data);
                setInfo(response.data)
            })
            .catch(function (error) {
                console.log(error)
                if (error.response.status === 401) {
                    window.location.href = "/loginPage";
                }
            });
    }

    function getRecentLeagues() {
        var config = {
            method: 'post',
            url: backend_url + 'league/get_recent_activity',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
            .then(function (response) {
                console.log("The recent activity league looks like: ", response.data);
                setInfo(response.data)
            })
            .catch(function (error) {
                console.log(error)
                if (error.response.status === 401) {
                    window.location.href = "/loginPage";
                }
            });
    }

    function createBoxSection(input, index) {
        if (index === 0) {
            return (
                <div className="fullRow">
                    {callFunc[props.children.socialType][props.children.informationType]["create"](input)}
                </div>
            );
        }
        else {
            return (
                <div className="fullRow">
                    <div className="topLine"></div>
                    {callFunc[props.children.socialType][props.children.informationType]["create"](input)}
                </div>
            );
        }

    }

    return (
        <div className="rowBox" id={props.children.socialType + props.children.informationType + "Box"}>
            <h2>{title}</h2>
            <div className="ItemsBox">
                {info.map(createBoxSection)}
            </div>
        </div>);
}

export default RowBox;