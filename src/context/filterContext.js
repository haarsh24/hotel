import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();



const FilterProvider = ({ children }) => {
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        rating: 3,
        city: "Delhi",
        search: "",
    
    })
    return (
        <>
            <FilterContext.Provider value={{filterState,filterDispatch}}>
                {children}
            </FilterContext.Provider>
        </>
    )
}

const useFilter = ()=>useContext(FilterContext);

export {useFilter,FilterProvider}