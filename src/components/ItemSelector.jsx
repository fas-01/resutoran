import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { INDIVIDUAL_ITEMS } from '../data/mockData';

const ItemSelector = ({ onAddItem }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = INDIVIDUAL_ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.includes(searchTerm)
  );

  return (
    <div className="item-selector glass-panel">
      <div className="section-header">
        <Search className="icon" />
        <h2>単品・食材から探す</h2>
      </div>
      
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="商品名やカテゴリ（肉、野菜など）で検索..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="item-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="standalone-item-card">
            <div className="item-badge">{item.category}</div>
            <div className="item-info">
              <h4>{item.name}</h4>
              <p className="item-price">¥{item.price}</p>
            </div>
            <button className="add-btn" onClick={() => onAddItem(item)}>
              <Plus size={18} /> 追加
            </button>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className="no-results">該当する商品がありません。</div>
        )}
      </div>
    </div>
  );
};

export default ItemSelector;
