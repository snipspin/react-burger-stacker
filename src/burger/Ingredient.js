import React from 'react';

function Ingredient(props) {
    return (
        <li 
        style={{
            backgroundColor: `${props.ingredient.color}`
          }}
        class={props.ingredient.color} key={props.ingredient.key} >
            {props.ingredient.name}
        </li>
    )
  }
  
  export default Ingredient;