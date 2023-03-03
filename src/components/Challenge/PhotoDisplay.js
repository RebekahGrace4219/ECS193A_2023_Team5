import {useState} from 'react';
import '../../css/Challenge/PhotoDisplay.css';
const PhotoDisplay = (props) => {

    let pictures = props.children.photos;
    const [length] =  useState(findLength(pictures));
    const [pictureList, setPictureList] = useState(moveList(pictures));
    const [pictureDiv] = useState(calculatePictureDiv());


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
    }
    return (
        <div>
            {pictureDiv}
        </div>
    );

}


export default PhotoDisplay;