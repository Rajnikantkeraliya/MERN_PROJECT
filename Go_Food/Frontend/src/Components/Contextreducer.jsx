import React, { createContext, useContext } from 'react'
import { act } from 'react';
import { useReducer } from 'react';

const cartstatecontext = createContext();
const cartdispatchcontext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]

        default:
            console.log("Error in Reducer")
    }
}

export const Cartprovider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    return (
        <cartdispatchcontext.Provider value={dispatch}>
            <cartstatecontext.Provider value={state}>
                {children}
            </cartstatecontext.Provider>

        </cartdispatchcontext.Provider>
    )

}
export const usecart = () => useContext(cartstatecontext)
export const usedispatchcart = () => useContext(cartdispatchcontext)