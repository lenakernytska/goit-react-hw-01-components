import React from "react";
import propTypes from "prop-types";
import FriendItem from "./FriendItem"

const FriendList = ({ friends }) =>
(<ul class="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) =>
    (<li key={id} class="item">
        <FriendItem avatar={avatar} name={name} isOnline={isOnline}/>
        </li>)
    )}
</ul>)

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number.isRequired
    })).isRequired
};

export default FriendList;