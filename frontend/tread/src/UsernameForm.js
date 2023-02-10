export const UsernameForm = () => {
    var state = {
        "text":"",
        "valid":false
    };

    function inputUsername(text){
      console.log(text.target.value);
      state["text"] = text.target.value;
    }

    function submitUsername(){
      console.log("Submit: "+ state["text"]);
      state["valid"] = true;
    }

    return (
      <form  id = "userForm" onSubmit={submitUsername}>
        <label>Select a Username</label>
        <input onChange = {inputUsername} type = "text" name = "UsernamePicker" id = "UsernamePicker"></input>
        <input type = "submit" value = "Next"></input>
      </form>
      );
}

export default UsernameForm;