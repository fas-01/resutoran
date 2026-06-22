import React from 'react';
import { ChefHat } from 'lucide-react';

const MenuSelector = ({ menus, activeMenu, onSelect }) => {
  return (
    <div className="menu-selector glass-panel">
      <div className="section-header">
        <ChefHat className="icon" />
        <h2>メニューを選ぶ</h2>
      </div>
      <div className="menu-cards">
        {menus.map(menu => (
          <div 
            key={menu.id} 
            className={`menu-card ${activeMenu.id === menu.id ? 'active' : ''}`}
            onClick={() => onSelect(menu)}
          >
            <img src={menu.image} alt={menu.name} className="menu-image" />
            <div className="menu-info">
              <h3>{menu.name}</h3>
              <p>{menu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSelector;
