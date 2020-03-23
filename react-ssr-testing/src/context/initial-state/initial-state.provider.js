import React from 'react';

import { InitialStateContext } from './intial-state.context';

function InitialStateProvider({children, initState}) {

    return (
        <InitialStateContext.Provider value={initState}>
            {children}
        </InitialStateContext.Provider>
    )
}

export default InitialStateProvider;