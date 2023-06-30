const {ADD_FAV, REMOVE_FAV, FILTER, ORDER } = require('./types');

// const inicioSesion = (param) => {
//     return {
//         type: LOGIN,
//         payload: {
//             email: param.email,
//             password: param.password
//         }
//     }
// }
const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje
    }
}
const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}
const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}



module.exports = {
    addFav,
    removeFav,
    orderCards,
    filterCards
}