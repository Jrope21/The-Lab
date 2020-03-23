import React, { useEffect, useContext } from 'react';
import fetch from 'node-fetch';
import { getUsers } from '../../context/initial-state/intial-state.actions';
// import { getUsers, setAllUsers } from '../../context/users/users.actions';

function UserList() {

    const users = getUsers();

    if (users) return (
        <div className="user-list">
            {users.map(({ name }, i) => (
                <p key={name + i}>{name}</p>
            ))}
        </div>
    )
    return null
}


// functions to be run on the server

async function fetchUsersList() {
    const request = await fetch('http://react-ssr-api.herokuapp.com/users');
    const response = await request.json();

    return response;
}

export async function loadData() {
    return await fetchUsersList();
}

export default UserList;