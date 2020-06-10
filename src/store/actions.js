import { GET_POKEMON, GET_RANDOM_POKEMON } from "./constants";
import axios from "axios";

const getPokemon = async (id, dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      dispatch({ type: GET_POKEMON, payload: res.data });
    })
    .catch((e) => console.log(e));
};

const getRandom = async (dispatch) => {
  axios
    .get(
      `https://pokeapi.co/api/v2/pokemon/${
        Math.floor(Math.random() * 200) + 1
      }/`
    )
    .then((res) => {
      dispatch({ type: GET_RANDOM_POKEMON, payload: res.data });
    })
    .catch((e) => console.log(e));
};

export const getSquirtleFunc = (dispatch) => {
  return () => getPokemon(7, dispatch);
};

export const getCharmanderFunc = (dispatch) => {
  return () => getPokemon(4, dispatch);
};

export const getBulbasaurFunc = (dispatch) => {
  return () => getPokemon(1, dispatch);
};

export const getRandomFunc = (dispatch) => {
  return () => getRandom(dispatch);
};
