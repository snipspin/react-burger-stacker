import React from 'react';

function Ingredient(props) {
    return (
        <li class={props.ingredient.color} key={props.ingredient.key} >
            {props.ingredient.name}
            <button onClick={(e) => {
                    // lifting
                    props.onClick(e, props.ingredient);
                }}>Add</button>
        </li>
    )
  }
  
  export default Ingredient;