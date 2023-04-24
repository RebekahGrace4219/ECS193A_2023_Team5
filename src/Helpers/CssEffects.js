const setDisplayProperty = (id, type) => {
    document.getElementById(id).style.display = type;
}

const reloadPage = () => {
    window.location.href = window.location.href;
}
export {setDisplayProperty, reloadPage};