import React from 'react';
import Ingredient from './burger/Ingredient'

function BurgerStack(props) {
    
    return (
      <div className="BurgerStack">
        <ul>
            <li>
                {/* {
(
    ()=> {
        for (let i = 0; i < props.burgerIngredients.length; i++) {
            const element = props.burgerIngredients[props.burgerIngredients.length - i - 1];
            console.log(element.name);
            <Ingredient ingredient={element} />
        }
    }
)()
                } */}
{props.burgerIngredients.map((ingredient) => 
<Ingredient ingredient={ingredient} />
)}
            </li>
        </ul>
      </div>
    );
}

export default BurgerStack;
