import React from "react";
import propTypes from "prop-types";


const FriendItem = ({ avatar, name, isOnline }) => (
    <>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="" width="48" />
        <p class="name">{name}</p>
    </>
)

FriendItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};
    
export default FriendItem;