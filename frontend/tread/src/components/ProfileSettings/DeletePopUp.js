/*import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../css/ProfileSettings/DeletePopUp.css'
const DeletePopUp = () => {
    return (
    <div id = "Popup">
        <h2>Are you sure?</h2>
        <p>
            <span className = "greenBaseText">This will </span>
            <span className = "redBaseText"> permanently </span>
            <span className = "greenBaseText">delete your account. You will </span>
            <span className = "redBaseText">lose</span>
            <span className = "greenBaseText"> all your friends, leagues, and medals. All your smart insights will be gone without a way to recover them.</span>
        </p>
        <button className = "DeleteButton"><p className = "DeleteButtonText">Delete</p></button>
        <button className = "CancelButton"><p className = "CancelButtonText">Cancel</p></button>
    </div>);
}
export default DeletePopUp;*/

import React from 'react';
import Popup from 'reactjs-popup';

export default () => (
  <Popup
    trigger={<button className = "DeleteButton"><p className = "DeleteButtonText">Delete</p></button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <h2> Are you sure? </h2>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);