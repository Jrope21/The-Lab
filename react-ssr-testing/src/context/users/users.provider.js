import React, { useState, useMemo } from 'react';
import { UserContext } from './users.context';

function UsersProvider({ children }) {

    const [users, setUsers] = useState('from da context');

    const value = useMemo(() => ({ users, setUsers }), [users, setUsers]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UsersProvider;