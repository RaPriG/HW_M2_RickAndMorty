const { ADD_FAV, REMOVE_FAV, FILTER, ORDER } = require('../actions/types');
const inicialState = {
    myFavorites: [],
    allCharacters: [],
}


const rootReducer = (state = inicialState, actions) => {
    switch (actions.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, actions.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(personaje => personaje.id !== Number(actions.payload))
            }
        case FILTER:
            return {
                ...state,
                status: false,
            }
        case ORDER:
            return {
                ...state,
                status: false,
            }

        default: return { ...state }
    }
}

export default rootReducer;