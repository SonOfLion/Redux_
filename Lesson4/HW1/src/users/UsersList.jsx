import React from 'react';
import User from '../users/User';
import Pagination from '../users/Pagination';
import { connect } from 'react-redux';
import * as userActions from '../users/users.actions';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
    const itemsPerPage = 3;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const showUsers = users.slice(startIndex, endIndex);

    return (
        <div>
            <Pagination
                goNext={goNext} 
                goPrev={goPrev} 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
                totalItems={users.length}
            />
            <ul className="users">
                {showUsers.map(user => {
                    return <User key={user.id} {...user}/>
                })}
            </ul>
        </div>
    );
};

const mapState = (state) => {
    return {
        users: state.usersList,
        currentPage: state.currentPage
    };
};

const mapDispatch = {
    goPrev: userActions.goPrev,
    goNext: userActions.goNext,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;