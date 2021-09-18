import React from "react";
import { useHistory } from "react-router";
import db from "../../../firebase/firebase";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, id, addChannelOption }) {

  // whenever you click a link or go back on a page browser stores
  // it in a history
  // so when a user click on a channel we push the next page 
  // in history
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`)
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if ( channelName ) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  }

  return (
    <div className="sidebarOption" onClick={ addChannelOption ? addChannel : selectChannel } >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel" >
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
