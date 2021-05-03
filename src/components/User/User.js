import React, {Component} from 'react';

function User({name, email, lastVisitTime, imgPath}){
    return (
        <li key={''} className={'user'}>
            <img src={imgPath} alt={name} className="user__avatar"/>
            <div className="user__main">
                <h2 className="user__name">{name}</h2>
                <p className="user__email">{email}</p>
            </div>
            <p className="user__time-visited">{lastVisitTime}</p>
        </li>
    );
}

export default User;
