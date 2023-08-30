import SliderComponent from "./YearSliderComponent"


const MainPage: React.FC = () => {
  const startDate = new Date('2018-01-01');
  const endDate = new Date('2021-01-01'); 

  return (
    <div className="MainPage">
      <SliderComponent startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default MainPage