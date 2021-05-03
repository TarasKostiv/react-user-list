import React, {Component} from 'react';
import Navigation from "../Navigation/Navigation";
import List from "../List/List";

class UserList extends Component {
    render() {
        return (
            <div className={'user-list'}>
                <Navigation />
                <List />
            </div>
        );
    }
}

export default UserList;