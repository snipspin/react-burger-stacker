import React from 'react';
import Ingredient from './Ingredient';

const ingredients = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ];


function IngredientList(props) {
    console.log(props.onClick)
    return (
      <div className="IngredientList">
          <ul>
          {ingredients.map((ingredient, index) => 
              <Ingredient ingredient={ingredient} index={index} onClick={props.onClick} />
              )}
              </ul>
      </div>
    );
  }
  
  export default IngredientList;