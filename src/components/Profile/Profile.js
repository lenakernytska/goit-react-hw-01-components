import React from "react"
import propTypes from "prop-types"
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, followers, views, likes }) =>
(<div className={styles.profile}>
    <div className={styles.description}>
        <img className={styles.avatar}
            src={avatar}
            alt="Аватар пользователя"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
        <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
        </li>
    </ul>
</div>);


Profile.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
};
 


export default Profile;