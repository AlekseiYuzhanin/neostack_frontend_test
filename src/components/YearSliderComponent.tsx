import React from 'react';
import Slider from 'antd/lib/slider';
import '../styles/SliderComponent/SliderComponent.css';

type RangeSliderProps = {
  startDate: Date;
  endDate: Date;
};

const SliderComponent: React.FC<RangeSliderProps> = ({ startDate, endDate }) => {
  const handleChange = (newValue: [number, number]) => {
    // Обработка изменений значения слайдера
  };

  const tipFormatter = (value: any): React.ReactNode => {
    const year = startDate.getFullYear() + Math.floor(value / 12);
    const month = (startDate.getMonth() + value) % 12;
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

  const marks: { [key: number]: string } = {};
  for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    marks[(year - startDate.getFullYear()) * 12 + startDate.getMonth()] = year.toString();
  }

  return (
    <div style={{ paddingTop: "100px", padding: '100px' }}>
      <Slider
        range
        defaultValue={[0, 56]}
        min={0}
        max={(endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth()}
        onChange={handleChange}
        className="SliderComponent"
        tooltipVisible={true}
        tipFormatter={tipFormatter}
        marks={marks}
      />
    </div>
  );
};

export default SliderComponent;