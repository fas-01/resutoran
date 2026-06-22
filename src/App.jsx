import React, { useState } from 'react';
import { MENUS } from './data/mockData';
import MenuSelector from './components/MenuSelector';
import IngredientCustomizer from './components/IngredientCustomizer';
import NutritionDashboard from './components/NutritionDashboard';
import CartSummary from './components/CartSummary';
import ItemSelector from './components/ItemSelector';
import { Truck } from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'item'
  const [weeklyPlan, setWeeklyPlan] = useState([]); // for menus
  const [standaloneItems, setStandaloneItems] = useState([]); // for single items
  
  const [activeMenu, setActiveMenu] = useState(MENUS[0]);
  const [currentSelections, setCurrentSelections] = useState(() => {
    const init = {};
    MENUS[0].ingredients.forEach(ing => {
      init[ing.categoryId] = ing.options[0].id;
    });
    return init;
  });

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
    const init = {};
    menu.ingredients.forEach(ing => {
      init[ing.categoryId] = ing.options[0].id;
    });
    setCurrentSelections(init);
  };

  const handleOptionChange = (categoryId, optionId) => {
    setCurrentSelections(prev => ({ ...prev, [categoryId]: optionId }));
  };

  const handleAddToPlan = () => {
    if (weeklyPlan.length >= 7) {
      alert("すでに7日分のメニューが追加されています！");
      return;
    }
    setWeeklyPlan(prev => [...prev, { menu: activeMenu, selections: currentSelections }]);
  };

  const handleAddStandaloneItem = (item) => {
    setStandaloneItems(prev => [...prev, item]);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-area">
          <Truck className="logo-icon" size={32} />
          <h1>WeekFresh</h1>
        </div>
        <p>1週間分の献立や食材を選んで、一括配送。</p>
      </header>
      
      <main className="main-content">
        <div className="left-column">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'menu' ? 'active' : ''}`}
              onClick={() => setActiveTab('menu')}
            >
              献立から選ぶ
            </button>
            <button 
              className={`tab-btn ${activeTab === 'item' ? 'active' : ''}`}
              onClick={() => setActiveTab('item')}
            >
              単品・食材を探す
            </button>
          </div>

          {activeTab === 'menu' ? (
            <>
              <MenuSelector menus={MENUS} activeMenu={activeMenu} onSelect={handleMenuChange} />
              <IngredientCustomizer 
                menu={activeMenu} 
                selections={currentSelections} 
                onChange={handleOptionChange} 
                onAdd={handleAddToPlan}
              />
            </>
          ) : (
            <ItemSelector onAddItem={handleAddStandaloneItem} />
          )}
        </div>
        
        <div className="right-column">
          {activeTab === 'menu' && (
            <NutritionDashboard menu={activeMenu} selections={currentSelections} />
          )}
          <CartSummary plan={weeklyPlan} standaloneItems={standaloneItems} />
        </div>
      </main>
    </div>
  );
}

export default App;
