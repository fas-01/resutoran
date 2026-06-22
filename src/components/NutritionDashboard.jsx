import React, { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

const NutritionDashboard = ({ menu, selections }) => {
  // Aggregate nutrition
  const nutrition = useMemo(() => {
    const total = { calories: 0, protein: 0, fat: 0, carbs: 0 };
    menu.ingredients.forEach(ing => {
      const selectedOptionId = selections[ing.categoryId];
      const option = ing.options.find(o => o.id === selectedOptionId);
      if (option && option.nutrition) {
        total.calories += option.nutrition.calories;
        total.protein += option.nutrition.protein;
        total.fat += option.nutrition.fat;
        total.carbs += option.nutrition.carbs;
      }
    });
    return total;
  }, [menu, selections]);

  const radarData = [
    { subject: 'タンパク質', A: nutrition.protein, fullMark: 50 },
    { subject: '脂質', A: nutrition.fat, fullMark: 50 },
    { subject: '炭水化物', A: nutrition.carbs, fullMark: 100 },
  ];

  return (
    <div className="nutrition-dashboard glass-panel">
      <div className="section-header">
        <Activity className="icon" />
        <h2>1食あたりの栄養価</h2>
      </div>
      
      <div className="calories-display">
        <span className="cal-value">{Math.round(nutrition.calories)}</span>
        <span className="cal-unit">kcal</span>
      </div>

      <div className="charts-container">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.2)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 12 }} />
              <Radar name="Nutrition" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="nutrition-stats">
          <div className="stat-item">
            <div className="stat-label">タンパク質</div>
            <div className="stat-value">{nutrition.protein}g</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">脂質</div>
            <div className="stat-value">{nutrition.fat}g</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">炭水化物</div>
            <div className="stat-value">{nutrition.carbs}g</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDashboard;
