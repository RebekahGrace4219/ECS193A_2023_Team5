import {useState} from 'react';

import '../../css/Challenge/photoDisplay.css';
const createURL = (username) => {
    return "https://res.cloudinary.com/dtsw9d8om/image/upload/profilePictures/"+username.replace("#", "_") + ".png";
}

const createURLS = (usernames) => {
    let list = [];

    usernames.forEach((username) => {list.push(createURL(username))});
    console.log(list);
    return list;
}

const PhotoDisplay = (props) => {
    let pictures = createURLS(props.photos);
    const [length] =  useState(findLength(pictures));
    const [pictureLength] = useState(min(3, length));
    const [firstThreePictureList, setPictureList] = useState(moveList(pictures));
    const [pictureDiv] = useState(calculatePictureDiv());


    function min(a, b){
        return (a<b?(a):b);
    }

    function findLength(pictures){
        return pictures.length;
    }

    function moveList() {
        let list_ = [];
        for(let i = 0; i < min(pictures.length, 3); i++){
            list_.push(pictures[i]);
        }
        return list_;
    }

    function calculatePosition(index){
        let offset = determineOffset();
        return offset + (index)*33;
    }

    function createPhotoObj(pictureURL, index){
        return (<div className = "holder" key = {pictureURL}><img className = "photoDisplayObj"  src = {pictureURL} alt = "profile"/></div>);
    }

    function calculatePictureDiv(){
        let photoObj = firstThreePictureList.map(createPhotoObj);
        let additionalDivNumber = length - 3;

        if (additionalDivNumber > 0){
            let additional = <div id = "numberObj" className='photoDisplayObj lastPhotoDisplay'><p className = "lastPhotoText">+{length-3}</p></div>
            photoObj.push(additional);
        }

        return photoObj;
    }

    function determineOffset(){
        return (180-(50 + 33*(pictureLength-1)))/2;
    }

    /*

    function determineOffset(){
        let numPictures = max(4, length);
        return (130+(33*(numPictures-1)));
    }

    function findLength(hashPictures){
        return Object.keys(hashPictures).length;
    }

    function min(a, b){
        return (a<b?(a):b);
    }

    function moveList(hashPictures) {
        let keyList = Object.keys(hashPictures);
        let list_ = [];
        for(let i = 0; i < min(keyList.length, 3); i++){
            list_.push(hashPictures[keyList[i]]);

        }
        return list_;
    }


    function createPhotoObj(pictureURL){
        return (<img className = "photoDisplayObj" src = {pictureURL} alt = "profile"/>);
    }

    function calculatePictureDiv(){
        let photoObj = pictureList.map(createPhotoObj);
        let additionalDivNumber = length - 3;

        if (additionalDivNumber > 0){
            let additional = <div id = "numberObj" className='photoDisplayObj'><p>+{length-3}</p></div>
            photoObj.push(additional);
        }

        return photoObj;
    }*/
    return (
        <div id = "PhotoDisplay">
            {pictureDiv}
        </div>
    );

}


export default PhotoDisplay;