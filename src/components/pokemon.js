import React from "react";

const Pokemon = (props) => (
  <div class="has-text-centered">
    <div>Name: {props.name}</div>
    <div>Height: {props.height} </div>
    <div>Weight: {props.weight} </div>
    <div>Exp: {props.base_experience}</div>
    {props?.sprites?.front_shiny && <img src={props.sprites.front_shiny} />}
  </div>
);
export default Pokemon;
