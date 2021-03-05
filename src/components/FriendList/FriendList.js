import React from "react";
import propTypes from "prop-types";
import FriendItem from "./FriendItem"
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) =>
(<ul className={styles.friendlist}>
    {friends.map(({ avatar, name, isOnline, id }) =>
    (<li key={id} className={styles.item}>
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