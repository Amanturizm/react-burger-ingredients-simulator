import React from 'react';
import { IIngCount } from '../Burger/Burger';
import Control, { TEvent } from './Control/Control';
import { nanoid } from 'nanoid';
import { INGREDIENTS } from '../../App';
import './Controls.css';

interface IProps {
	ingredients: IIngCount[];
	addClickHandler: (index: number) => void;
	removeClickHandler: (event: TEvent, index: number) => void;
}

const Controls: React.FC<IProps> = ({ ingredients, addClickHandler, removeClickHandler }) => {
	return (
		<div className="controls">
			{
				ingredients.map((ingredient: IIngCount, index: number) => {
					return (
						<Control
							add={() => addClickHandler(index)}
							remove={(event: TEvent) => removeClickHandler(event, index)}
							key={nanoid()}
							image={INGREDIENTS[index].image}
							name={ingredient.name}
							count={ingredient.count}
						/>
					);
				})
			}
		</div>
	);
};

export default Controls;