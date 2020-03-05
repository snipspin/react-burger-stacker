import React from 'react'

function ClearBurgerStack(props) {
    return (
      <div className="ClearBurgerStack">
        <button onClick={(e) => {
            {props.onClear(e);}
        }}
        >Clear</button>
      </div>
    );
  }
  
  export default ClearBurgerStack;