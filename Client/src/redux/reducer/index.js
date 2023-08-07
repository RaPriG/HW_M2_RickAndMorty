const { ADD_FAV, REMOVE_FAV, FILTER, ORDER } = require('../actions/types');
const inicialState = {
    myFavorites: [],
    allCharacters: [],
    filterFavorite: [],
}


const rootReducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                //  allCharacters: [...state.allCharacters, newFav]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            }
        case FILTER:
            const filterGender = [...state.myFavorites].filter(personaje => personaje.gender === payload);

            return {
                ...state,
                filterFavorite: payload === "Todos" ? [...state.myFavorites] : filterGender,
            }
        case ORDER:
            let newArray = [...state.myFavorites];
            if (payload === "A") {
                newArray = newArray.sort((a, b) => (a.name - b.nombre) ? 1 : -1);
            } else if (payload === "D") {
                newArray = newArray.sort((a, b) => (b.name - a.nombre) ? 1 : -1);
            }
            return {
                ...state,
                myFavorites: newArray,
            }

        default: return { ...state }
    }
}

export default rootReducer;