import React, { useState } from 'react';
import Burger, { IIngCount } from './components/Burger/Burger';
import Controls from './components/Controls/Controls';
import { IIngredient, TEvent } from './components/Controls/Control/Control';
import './App.css';
import meat from './assets/Meat.png';
import cheese from './assets/Cheese.png';
import salad from './assets/Salad.png';
import bacon from './assets/Bacon.png';

export const INGREDIENTS: IIngredient[] = [
	{ name: 'Meat', price: 80, image: meat },
	{ name: 'Cheese', price: 50, image: cheese },
	{ name: 'Salad', price: 10, image: salad },
	{ name: 'Bacon', price: 60, image: bacon }
];

const App = () => {
	const [ingredients, setIngredients] =
		useState<IIngCount[]>([
			{ name: 'Meat', count: 0 },
			{ name: 'Cheese', count: 0 },
			{ name: 'Salad', count: 0 },
			{ name: 'Bacon', count: 0 }
		]);

	const [price, setPrice] = useState<number>(30);

	const pricing = (ingredients: IIngCount[]): void => {
		setPrice(() => {
			return ingredients.reduce((acc: number, value: IIngCount, index: number) => {
				return acc + (value.count * INGREDIENTS[index].price);
			}, 30);
		});
	};

	const addIngredient = (index: number): void => {
		setIngredients(prevState => {
			const ingredientsCopy: IIngCount[] = [...prevState];
			const ingredientCopy: IIngCount = { ...ingredientsCopy[index] };
			ingredientCopy.count++;
			ingredientsCopy[index] = ingredientCopy;
			pricing(ingredientsCopy);
			return ingredientsCopy;
		});
	};

	const removeIngredient = (event: TEvent, index: number): void => {
		event.stopPropagation();
		setIngredients(prevState => {
			const ingredientsCopy: IIngCount[] = [...prevState];
			const ingredientCopy: IIngCount = { ...ingredientsCopy[index] };
			ingredientCopy.count--;
			ingredientsCopy[index] = ingredientCopy;
			pricing(ingredientsCopy);
			return ingredientsCopy;
		});
	};

	return (
		<div className="App">
			<Burger ingredients={ingredients} price={price}/>
			<Controls addClickHandler={addIngredient} removeClickHandler={removeIngredient} ingredients={ingredients}/>
		</div>
	);
};

export default App;