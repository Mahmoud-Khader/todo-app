import React from 'react';
import { useState } from 'react';
export const SettingsContext = React.createContext();

export default function Settings(props) {
    const [itemsPerPage,setItemsPerPage]=useState(3);
    const [sort,setSort]=useState('So Hard');
    const [showCompleted,setShowCompleted]=useState(false);

    const state = {
        itemsPerPage,
        sort,
        showCompleted,
        setItemsPerPage,
        setSort,
        setShowCompleted,
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}
