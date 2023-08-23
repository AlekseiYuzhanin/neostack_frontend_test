import React, { useState } from 'react';
import Slider from 'antd/lib/slider';

type MonthSliderProps = {
  min: Date;
  max: Date;
};

const MonthSliderComponent: React.FC<MonthSliderProps> = ({ min, max }) => {
  const [range, setRange] = useState<[number, number]>([0, 56]);

  const tipFormatter = (value: any): React.ReactNode => {
    const year = min.getFullYear() + Math.floor(value / 12);
    const month = (min.getMonth() + value) % 12;
    const monthName = new Intl.DateTimeFormat('ru', { month: 'long' }).format(new Date(year, month));
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

  return (
    <div>
      <Slider
        range
        value={range}
        min={0}
        max={(max.getFullYear() - min.getFullYear()) * 12 + max.getMonth() - min.getMonth()}
        tooltipVisible={true}
        tipFormatter={tipFormatter}
        onChange={handleChange}
      />
    </div>
  );
};

export default MonthSliderComponent;