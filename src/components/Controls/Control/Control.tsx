import React, {MouseEventHandler} from 'react';
import './Control.css';

export interface IIngredient {
  name: string;
  price: number;
  image: string;
}

interface IProps {
  image: string;
  name: string;
  count: number;
  add: () => void;
}

const Control: React.FC<IProps> = ({ image, name, count, add }) => {
  return (
    <div className="controlItem" onClick={add}>
      <img className="image" src={image} alt={name} />
      <h4 className="title">{name}</h4>
      {count > 0 && (
        <div className="count">
          {count}
        </div>
      )}
    </div>
  );
};

export default Control;