import '../css/Front/front.css'
const Front = () => {
    return (
        <div id = "Front">
            <div id = "top">
                <button>About</button>
                <button>Log in/Sign up</button>
            </div>
            <div>
                <div id = "logoTitleSide">
                    <img id = "frontPageLogo"></img>
                    <p id = "frontPageTitle"></p>
                    <p id = "frontPageSubtitle"></p>
                </div>
            </div>
        </div>
    );
}
export default Front;