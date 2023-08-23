import React, { useState } from 'react';
import Slider from 'antd/lib/slider';
import '../styles/SliderComponent/MonthSliderComponent.css'

type MonthSliderProps = {
    min: Date;
    max: Date;
  };
  
  const MonthSliderComponent: React.FC<MonthSliderProps> = ({ min, max }) => {
    const [range, setRange] = useState<[number, number]>([0, 12]);
  
    const tipFormatter = (value: any): React.ReactNode => {
      const year = min.getFullYear() + Math.floor(value / 12);
      const month = (min.getMonth() + value) % 12;
      const monthName = new Intl.DateTimeFormat('ru', { month: 'short' }).format(new Date(year, month));
      return (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
          <div>
            {monthName}
          </div>
          <div>
            {year}
          </div>
        </div>
      );
    };
  
    const handleChange = (newValue: [number, number]) => {
      setRange(newValue);
    };
  
    const marks: { [key: number]: string } = {};
    const currentYear = new Date().getFullYear();
    let yearIncrement = 0; 
    
    for (let year = min.getFullYear(); year <= max.getFullYear(); year++) {
        const startMonth = year === currentYear ? min.getMonth() : 0;
        const endMonth = year === max.getFullYear() ? max.getMonth() : 11;
        for (let month = startMonth; month <= endMonth; month++) {
            let monthName = new Intl.DateTimeFormat('ru', { month: 'short' }).format(new Date(year, month));
    
        if (monthName === 'янв.') {
            monthName = String(min.getFullYear() + yearIncrement);
            yearIncrement++; 
        }
    
        marks[(year - min.getFullYear()) * 12 + month] = monthName;
    }
}
  
    return (
      <div >
        <Slider
          range
          value={range}
          min={0}
          max={(max.getFullYear() - min.getFullYear()) * 12 + max.getMonth() - min.getMonth()}
          tooltipVisible={true}
          tipFormatter={tipFormatter}
          onChange={handleChange}
          marks={marks}
        />
      </div>
    );
  };
  
  export default MonthSliderComponent;