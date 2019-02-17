import React from "react";
import { bubble as Menu } from "react-burger-menu";
import './menu-burger.css';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Главная
      </a>

      <a className="menu-item" href="/workout">
        Тренировки
      </a>

      <a className="menu-item" href="/cart">
        Магазин
      </a>

      <a className="menu-item" href="/about">
        О нас
      </a>
    </Menu>
  );
};
