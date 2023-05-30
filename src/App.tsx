import React, { useState } from 'react';
import Burger, { IIngCount } from './components/Burger/Burger';
import Controls from './components/Controls/Controls';
import './App.css';

const App = () => {

  const [ingredients, setIngredients] =
    useState<IIngCount[]>([
      {name: 'Meat', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Salad', count: 0},
      {name: 'Bacon', count: 0},
    ]);

  const addIngredient = (index: number) => {
    setIngredients(prevState => {
      const ingredientsCopy: IIngCount[] = [...prevState];
      const ingredientCopy: IIngCount = {...ingredientsCopy[index]};
      ingredientCopy.count++;
      ingredientsCopy[index] = ingredientCopy;
      return ingredientsCopy;
    })
  };

  return (
    <div className="App">
      <Burger ingredients={ingredients}/>
      <Controls onClickHandler={addIngredient} ingredients={ingredients} />
    </div>
  );
};

export default App;