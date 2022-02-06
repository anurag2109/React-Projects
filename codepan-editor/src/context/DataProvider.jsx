
import React, { useState} from 'react';
import DataContext from './DataContext';


const DataProvider = ({children}) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const state = {
        html, setHtml,
        css, setCss,
        js, setJs
    }
    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
};

export default DataProvider;
