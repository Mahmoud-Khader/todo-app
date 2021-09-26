import React from 'react';

export const SettingsContext = React.createContext();

export default function Settings(props) {
    const state = {
        itemsPerPage: 3,
        sort: 'Ascending',
        show: false,
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}