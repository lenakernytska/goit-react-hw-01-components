import React from "react";
import propTypes from "prop-types"
import styles from "./FriendItem.module.css"



const FriendItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? styles.online : styles.offline;

    return (
        <>
            <span className={status}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
        </>
    );
};
  

FriendItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};
    
export default FriendItem;