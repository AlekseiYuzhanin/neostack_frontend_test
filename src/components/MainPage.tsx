import { FC,useState } from "react"
import SliderComponent from "./YearSliderComponent"


const MainPage: React.FC = () => {
  const startDate = new Date('2010-01-01'); // Установите нужную начальную дату
  const endDate = new Date('2021-12-31'); // Установите нужную конечную дату

  return (
    <div className="MainPage">
      <SliderComponent startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default MainPage