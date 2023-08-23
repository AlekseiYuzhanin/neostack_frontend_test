import { FC,useState } from "react"
import SliderComponent from "./YearSliderComponent"


const MainPage:FC = () =>{
    return (
      <div className="MainPage">
        <SliderComponent min={2014} max={2021}/>
      </div>

  );
}

export default MainPage