import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartSummary = ({ plan, standaloneItems = [] }) => {
  const totalMeals = plan.length;
  const totalItems = standaloneItems.length;
  
  const menuTotal = plan.reduce((sum, item) => {
    const mealPrice = item.menu.ingredients.reduce((acc, ing) => {
      const optionId = item.selections[ing.categoryId];
      const opt = ing.options.find(o => o.id === optionId);
      return acc + (opt ? opt.price : 0);
    }, 0);
    return sum + mealPrice;
  }, 0);

  const itemsTotal = standaloneItems.reduce((sum, item) => sum + item.price, 0);
  const weeklyTotal = menuTotal + itemsTotal;

  return (
    <div className="cart-summary glass-panel">
      <div className="section-header">
        <ShoppingCart className="icon" />
        <h2>1週間の買い物リスト</h2>
      </div>
      
      <div className="cart-stats">
        <div className="cart-stat">
          <span className="stat-title">メニュー / 単品数</span>
          <span className="stat-val">{totalMeals} 食 / {totalItems} 点</span>
        </div>
        <div className="cart-stat highlight">
          <span className="stat-title">お支払い予定額</span>
          <span className="stat-val">¥{weeklyTotal}</span>
        </div>
      </div>

      <div className="plan-list">
        {plan.map((item, index) => (
          <div key={`plan-${index}`} className="plan-item">
            <div className="plan-day">Day {index + 1}</div>
            <div className="plan-menu-name">{item.menu.name}</div>
          </div>
        ))}
        {standaloneItems.map((item, index) => (
          <div key={`item-${index}`} className="plan-item item-only">
            <div className="plan-day item-tag">単品</div>
            <div className="plan-menu-name">{item.name}</div>
          </div>
        ))}
        
        {plan.length === 0 && standaloneItems.length === 0 && (
          <div className="empty-cart">
            <p>商品を選んで追加してください。</p>
          </div>
        )}
      </div>

      <button className="checkout-btn" disabled={plan.length === 0 && standaloneItems.length === 0}>
        1週間分を注文する
      </button>
    </div>
  );
};

export default CartSummary;
