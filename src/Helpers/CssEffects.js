const setDisplayProperty = (id, type) => {
    document.getElementById(id).style.display = type;
}

const reloadPage = () => {
    window.location.href = window.location.href;
}

const flipButton = (id, showState) => {
    let deg = 180;
    if (showState){
        deg = 0;
    }
    document.getElementById(id).style.transform = 'rotate(' + deg + 'deg)';
}
export {setDisplayProperty, reloadPage, flipButton};