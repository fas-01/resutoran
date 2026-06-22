import React from 'react';
import { ShoppingBasket, PlusCircle } from 'lucide-react';

const IngredientCustomizer = ({ menu, selections, onChange, onAdd }) => {
  const totalPrice = menu.ingredients.reduce((total, ing) => {
    const selectedOptionId = selections[ing.categoryId];
    const option = ing.options.find(o => o.id === selectedOptionId);
    return total + (option ? option.price : 0);
  }, 0);

  return (
    <div className="ingredient-customizer glass-panel">
      <div className="section-header">
        <ShoppingBasket className="icon" />
        <h2>食材のカスタマイズ</h2>
      </div>
      <p className="subtitle">{menu.name} の食材</p>
      
      <div className="ingredient-list">
        {menu.ingredients.map(ing => {
          const selectedOption = ing.options.find(o => o.id === selections[ing.categoryId]);
          return (
            <div key={ing.categoryId} className="ingredient-item">
              <label className="ingredient-label">{ing.categoryName}</label>
              
              <div className="options-container">
                {ing.options.map((opt, idx) => (
                  <div 
                    key={opt.id} 
                    className={`option-card ${selections[ing.categoryId] === opt.id ? 'selected' : ''}`}
                    onClick={() => onChange(ing.categoryId, opt.id)}
                  >
                    <div className="option-name">
                      {idx === 0 && <span className="badge-cheap">最安</span>}
                      {opt.name}
                    </div>
                    <div className="option-price">¥{opt.price}</div>
                  </div>
                ))}
              </div>

              {selectedOption && selectedOption.producer && (
                <div className="producer-card">
                  <div className="producer-photo-wrapper">
                    <img src={selectedOption.image} alt={selectedOption.name} className="ingredient-photo" />
                  </div>
                  <div className="producer-info">
                    <img src={selectedOption.producer.avatar} alt="Producer" className="producer-avatar" />
                    <div className="producer-text">
                      <span className="producer-name">{selectedOption.producer.name} さん</span>
                      <p className="producer-message">「{selectedOption.producer.message}」</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="customizer-footer">
        <div className="total-price">
          1食分合計: <span>¥{totalPrice}</span>
        </div>
        <button className="add-to-cart-btn" onClick={onAdd}>
          <PlusCircle size={20} />
          1週間分のリストに追加
        </button>
      </div>
    </div>
  );
};

export default IngredientCustomizer;
