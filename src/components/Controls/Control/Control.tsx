import React, {MouseEventHandler} from 'react';
import './Control.css';

export type TEvent = React.SyntheticEvent<EventTarget>;

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
  remove: (event: TEvent) => void;
}

const Control: React.FC<IProps> = ({image, name, count, add, remove}) => {
  return (
    <div className="controlItem" onClick={add}>
      <img className="image" src={image} alt={name}/>
      <h4 className="title">{name}</h4>
      {count > 0 && (
        <div className="count" onClick={remove}>
          {count}
        </div>
      )}
    </div>
  );
};

export default Control;