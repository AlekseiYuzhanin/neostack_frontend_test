import React, { useState } from 'react';
import Slider from 'antd/lib/slider';
import '../styles/SliderComponent/SliderComponent.css';
import MonthSliderComponent from './MonthSliderComponent';

type RangeSliderProps = {
  startDate: Date;
  endDate: Date;
};

const SliderComponent: React.FC<RangeSliderProps> = ({ startDate, endDate }) => {
  const [dateRange, setDateRange] = useState<[Date, Date]>([startDate, endDate]);

  const handleChange = (newValue: [number, number]) => {
    const startYear = startDate.getFullYear() + Math.floor(newValue[0] / 12);
    const startMonth = (startDate.getMonth() + newValue[0]) % 12;
    const endYear = startDate.getFullYear() + Math.floor(newValue[1] / 12);
    const endMonth = (startDate.getMonth() + newValue[1]) % 12;

    const newStartDate = new Date(startYear, startMonth);
    const newEndDate = new Date(endYear, endMonth);

    setDateRange([newStartDate, newEndDate]);
  };



  const tipFormatter = (value: any): React.ReactNode => {
    const year = startDate.getFullYear() + Math.floor(value / 12);
    const month = (startDate.getMonth() + value) % 12;
    let monthName = new Intl.DateTimeFormat('ru', { month: 'long' }).format(new Date(year, month));
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
      <div className='base'>
      <div className='wrapper'>
      <div className='main'>
        <h2>Слайдер года</h2>
        <div className='description'>
              <p>Все года</p>
              <p>месяца</p>
        </div>
      </div>
      <div className='main_slider'>
      <Slider
        range
        defaultValue={[0, 12]}
        min={0}
        max={(endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth()}
        onChange={handleChange}
        tooltipVisible={true}
        tipFormatter={tipFormatter}
        marks={marks}
      />
      </div>
    </div>
      <MonthSliderComponent min={dateRange[0]} max={dateRange[1]}></MonthSliderComponent>
    </div>
  )
};

export default SliderComponent;