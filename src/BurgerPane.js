import React from 'react';
import BurgerStack from './BurgerStack'
import ClearBurgerStack from './burger/ClearBurgerStack'

function BurgerPane(props) {
    return (
      <div className="BurgerPane">
        <BurgerStack burgerIngredients={props.burgerIngredients} />
        <ClearBurgerStack onClear={props.onClear} />
      </div>
    );
  }
  
  export default BurgerPane;