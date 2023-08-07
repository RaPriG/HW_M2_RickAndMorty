import axios from 'axios';
const { ADD_FAV, REMOVE_FAV, FILTER, ORDER } = require('./types');

const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            let newFav = data.pop();
            return dispatch({
                type: ADD_FAV,
                payload: newFav,
            });
        });
    };
}
const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
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

export  {
    addFav,
    removeFav,
    orderCards,
    filterCards
}