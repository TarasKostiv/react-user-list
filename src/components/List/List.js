import React, {Component, useState} from 'react';
import User from "../User/User";
import {Users} from "../../services/api";

function List() {
    const [users, setUsers] = useState(Users())
    const renderUsers = (list) => {
        return list.map(user => <User name={user.name} email={user.email} lastVisitTime={user.lastVisitTime.toString()} imgPath={user.imgPath}/>)
    }
    return (
        <ul className={'list'}>
            {renderUsers(users)}
            {renderUsers(users)}
        </ul>
    );
}

export default List;