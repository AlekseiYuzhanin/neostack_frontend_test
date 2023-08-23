import React, { useState } from 'react';
import Slider from 'antd/lib/slider';
import '../styles/SliderComponent/SliderComponent.css'
import MonthSliderComponent from './MonthSliderComponent';

type RangeSliderProps = {
    min: number;
    max: number;
  };
  
const SliderComponent: React.FC<RangeSliderProps> = ({min,max}) => {
  const [value, setValue] = useState<[number, number]>([min, max]);

  const handleChange = (newValue: [number, number]) => {
    setValue(newValue);
  };

const marks: { [key: number]: string } = {};
for (let year = min; year <= max; year++) {
    marks[year] = year.toString();
  }

  return (
    <div style={{paddingTop: "100px", padding: "100px"}}>
      <h2>Слайдер года</h2>
      <Slider
        range
        defaultValue={[min, max]}
        min={min}
        max={max}
        onChange={handleChange}
        marks={marks}
        className='SliderComponent'
        tooltipVisible={true}
      />
      <h2>Слайдер месяца</h2>
      <MonthSliderComponent/>
    </div>
  );
};

export default SliderComponent;