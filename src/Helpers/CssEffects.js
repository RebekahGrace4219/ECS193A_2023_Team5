export const setDisplayProperty = (id, type) => {
    document.getElementById(id).style.display = type;
}

export const reloadPage = () => {
    window.location.href = window.location.href;
}

export const flipButton = (id, showState) => {
    let deg = 180;
    if (showState){
        deg = 0;
    }
    document.getElementById(id).style.transform = 'rotate(' + deg + 'deg)';
}