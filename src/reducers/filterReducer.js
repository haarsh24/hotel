const filterReducer = (state , action) => {
    switch (action.type) {
        case "RATING":
            return {...state, rating:action.payload};
            case "CITY":
                return state.city.includes(action.payload)
                    ? {
                        ...state,
                        city:
    
                            [...state.city.filter(item => item !== action.payload)]
    
                    } : { ...state, city: [...state.city, action.payload] }
        case "RESET_ALL_FILTERS":
            return { ...state, sort: "",  rating: 3, city: [] ,search:""}
        case "FILTER_BY_SEARCH":
            return { ...state, search: action.payload }

        default:
            return state;
    }
}
export {filterReducer};