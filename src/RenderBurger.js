import React, {useState} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

function RenderBurger() {
    // define state
    const [burgerIngredients, setBurgerIngredients] = useState([]);
    const addBurgerIngredient = (e, newBurgerIngredient) => {
        e.preventDefault();
        console.log(newBurgerIngredient);
        setBurgerIngredients([...burgerIngredients, newBurgerIngredient]);
    }

    const clearBurgerIngredients = (e) => {
        e.preventDefault();
        setBurgerIngredients([]);
    }
    return (
      <div className="RenderBurger">
          <IngredientList onClick={addBurgerIngredient} />
          <BurgerPane burgerIngredients={burgerIngredients} onClear={clearBurgerIngredients} />
      </div>
    );
  }
  
  export default RenderBurger;