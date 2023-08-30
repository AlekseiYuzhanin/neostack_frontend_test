import React, {  useState } from 'react';
import Slider from 'antd/lib/slider';
import '../styles/SliderComponent/SliderComponent.scss';
import ListComponent from './ListComponent';

type RangeSliderProps = {
  startDate: Date;
  endDate: Date;
};

type MarksType = Record<string | number, React.ReactNode | { label: React.ReactNode; style?: React.CSSProperties }>;

const monthInYear = 12;

const SliderComponent: React.FC<RangeSliderProps> = ({ startDate, endDate }) => {
  const [dateRange, setDateRange] = useState<[Date, Date]>([startDate, endDate]);
    const handleYearChange = (newValue: [number, number]) => {
    const startYear = startDate.getFullYear() + Math.floor(newValue[0] / monthInYear);
    const startMonth = (startDate.getMonth() + newValue[0]) % monthInYear;
    const endYear = startDate.getFullYear() + Math.floor(newValue[1] / monthInYear);
    const endMonth = (startDate.getMonth() + newValue[1]) % monthInYear;

    const newStartDate = new Date(startYear, startMonth);
    const newEndDate = new Date(endYear, endMonth);

    setDateRange([newStartDate, newEndDate]);
  };

  const [range, setRange] = useState<[number, number]>([0, 12]);

  const [toggle, setToggle] = useState('Год');
  const [yearElementColor, setYearElementColor] = useState('rgba(1, 103, 179, 1)');
  const [monthElementColor, setMonthElementColor] = useState('rgba(1, 103, 179, 1)');
  
  const updateToYear = () => {
    setToggle('Год');
    setYearElementColor('rgba(1, 103, 179, 1)');
    setMonthElementColor('rgba(1, 103, 179, 0.5)');
  
    }
    
    const updateToMonth = () => {
    setToggle('Месяц');
    setYearElementColor('rgba(1, 103, 179, 0.5)');
    setMonthElementColor('rgba(1, 103, 179, 1)');
    }


  const yearTipFormatter = (value?: number): React.ReactNode => {
    if (value === undefined){
      return null
    }
    const year = startDate.getFullYear() + Math.floor(value / monthInYear);
    const month = (startDate.getMonth() + value) % monthInYear;
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

  const monthTipFormatter = (value?:number): React.ReactNode => {
    if(value === undefined){
      return null
    }
    const secondYear = dateRange[0].getFullYear() + Math.floor(value / monthInYear);
    const secondMonth = (dateRange[0].getMonth() + value) % monthInYear;
    const monthName = new Intl.DateTimeFormat('ru', { month: 'long' }).format(new Date(secondYear, secondMonth));
    return (
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <div>
          {monthName}
        </div>
        <div>
          {secondYear}
        </div>
      </div>
    );
  };

  const marks: { [key: number]: string } = {};

  for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
    marks[(year - startDate.getFullYear()) * monthInYear + startDate.getMonth()] = year.toString();
  }
  
  const marksArr = Object.keys(marks).map((key) => ({
    id: parseInt(key),
    text: marks[parseInt(key)],
  }));

  const marksObj = marksArr
  .map((mark) => ({ [mark.id]: { label: <ListComponent items={[mark]} style={{color: 'var(--999999, #999)', listStyleType:"none", textOverflow: "ellipsis", whiteSpace:"nowrap", fontSize: "10px", width:"30px"}} /> } }))
  .reduce((acc, mark) => ({ ...acc, ...mark }), {} as MarksType);

  const handleMonthChange = (newValue: [number, number]) => {
    setRange(newValue);
  };

  const monthMarks: { [key: number]: string } = {};
  const currentYear = new Date().getFullYear();
  let yearIncrement = 0; 
  
  
  for (let year = dateRange[0].getFullYear(); year <= dateRange[1].getFullYear(); year++) {
      const startMonth = year === currentYear ? dateRange[0].getMonth() : 0;
      const endMonth = year === dateRange[1].getFullYear() ? dateRange[1].getMonth() : monthInYear;
      for (let month = startMonth; month <= endMonth; month++) {
          let monthName = new Intl.DateTimeFormat('ru', { month: 'short' }).format(new Date(year, month)).slice(0,3);
  
      if (monthName === 'янв') {
          monthName = String(dateRange[0].getFullYear() + yearIncrement);
          yearIncrement+=0.5
      }
  
      monthMarks[(year - dateRange[0].getFullYear()) * monthInYear + month] = monthName;
  }
}

const monthMarksArr = Object.keys(monthMarks).map((key) => ({
  id: parseInt(key),
  text: monthMarks[parseInt(key)],
}));

const monthMarksObj = monthMarksArr
.map((mark) => ({ [mark.id]: { label: <ListComponent items={[mark]} style={{color: 'var(--999999, #999)', overflow:"hidden",listStyleType:"none", textOverflow: "ellipsis", whiteSpace:"nowrap", fontSize: "8px"}} /> } }))
.reduce((acc, mark) => ({ ...acc, ...mark }), {} as MarksType);


  return (
      <div className='wrapper'>
        <div className='description'>
              <a id='year' style={{color: yearElementColor, transition: ''}} href='#' onClick={updateToYear}>Все года</a>
              <a id='month' href='#' style={{color:monthElementColor}} onClick={updateToMonth}>Месяца</a>
        </div>
      {toggle === 'Год'?
      <div className='main_slider'>
          <Slider
            range
            defaultValue={[0, monthInYear]}
            min={0}
            max={(endDate.getFullYear() - startDate.getFullYear()) * monthInYear + endDate.getMonth() - startDate.getMonth()}
            onChange={handleYearChange}
            tooltip={{ formatter: yearTipFormatter, open: true, autoAdjustOverflow: true }}
            marks={marksObj}
          />
      </div>
        :
        <div className='main_slider'>
          <Slider
            range
            defaultValue={[0, monthInYear]}
            min={0}
            max={(dateRange[1].getFullYear() - dateRange[0].getFullYear()) * monthInYear + dateRange[1].getMonth() - dateRange[0].getMonth()}
            tooltip={{ formatter: monthTipFormatter, open: true, autoAdjustOverflow: true}}
            onChange={handleMonthChange}
            marks={monthMarksObj}  
          />
          </div>
        }
      </div>
  )
};

export default SliderComponent;