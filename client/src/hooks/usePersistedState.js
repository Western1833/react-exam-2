import { useState } from "react";

export default function usePersistedState(key, defaultValue) {
    //Here we provide the user from localStorage to the setState or we set it to default
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if(persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });
    //Here we set the user to localStorage
    const setPersistedState = (value) => {
        let serializedValue;// value in text format
        setState(value);
        // we check for function when we check based on previous state to change and take the new state
        if(typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }
        //if value is not a function
        localStorage.setItem(key, serializedValue);
    }

    return [
        state,
        setPersistedState
    ];
};