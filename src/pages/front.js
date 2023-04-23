import '../css/Front/front.css'
const Front = () => {
    function moveLogin(){
        window.location.href = "/loginPage";
    }
    return (
        <div id = "Front">
            <div id = "frontPageHeader">
                <button className = "frontPageButton" onClick = {moveLogin}>Log in/Sign up</button>
            </div>
            <div id = "frontPageBody">
                <div id = "logoTitleSide">
                    <img id = "frontPageLogo" src = "https://i.imgur.com/qajrJEV.png"></img>
                    <p id = "frontPageTitle">Tread</p>
                    <p id = "frontPageSubtitle">Stay Fit with Friends</p>
                </div>
            </div>
        </div>
    );
}

/*
<img id = "TreadTitle" src = "https://i.imgur.com/U7OO0JG.png" alt = "Tread"/></div>
          <div id = "TreadSubtitleDiv"><img id = "TreadSubtitle" src = "https://i.imgur.com/Mx4rK6l.png" alt = "Stay Fit with Friends"/></div>*/
export default Front;