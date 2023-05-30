import React, {MouseEventHandler} from 'react';
import {IIngCount} from '../Burger/Burger';
import Control, {IIngredient, TEvent} from './Control/Control';
import {nanoid} from 'nanoid';
import meat from '../../assets/Meat.png';
import cheese from '../../assets/Cheese.png';
import salad from '../../assets/Salad.png';
import bacon from '../../assets/Bacon.png';
import './Controls.css';

const INGREDIENTS: IIngredient[] = [
  {name: 'Meat', price: 80, image: meat},
  {name: 'Cheese', price: 50, image: cheese},
  {name: 'Salad', price: 10, image: salad},
  {name: 'Bacon', price: 60, image: bacon},
];

interface IProps {
  ingredients: IIngCount[];
  addClickHandler: (index: number) => void;
  removeClickHandler: (event: TEvent, index: number) => void;
}

const Controls: React.FC<IProps> = ({ingredients, addClickHandler, removeClickHandler}) => {
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