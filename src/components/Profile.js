import React from "react"
import propTypes from "prop-types"

const Profile = ({ avatar, name, tag, location, followers, views, likes }) =>
(<div class="profile">
    <div class="description">
        <img
            src={avatar}
            alt="Аватар пользователя"
            class="avatar"
            width="200"
        />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
    </div>

    <ul class="stats">
        <li>
            <span class="label">Followers</span>
            <span class="quantity">{followers}</span>
        </li>
        <li>
            <span class="label">Views</span>
            <span class="quantity">{views}</span>
        </li>
        <li>
            <span class="label">Likes</span>
            <span class="quantity">{likes}</span>
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