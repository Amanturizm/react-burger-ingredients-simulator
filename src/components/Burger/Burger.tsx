import React from 'react';
import {nanoid} from 'nanoid';
import './Burger.css';

export interface IIngCount {
  name: string;
  count: number;
}

interface IProps {
  ingredients: IIngCount[];
}

const Burger: React.FC<IProps> = ({ingredients}) => {
  return (
    <div className="Burger-wrap">
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {
          ingredients.map((ingredient: IIngCount) => {
            const allIngredients: React.ReactNode[] = [];
            for (let i: number = 0; i < ingredient.count; i++) {
              allIngredients.push(<div key={nanoid()} className={ingredient.name}></div>);
            }
            return allIngredients;
          })
        }
        <div className="BreadBottom"></div>
      </div>
      <div className="Price">Price: <span>100сом</span></div>
    </div>
  );
};

export default Burger;