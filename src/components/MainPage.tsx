import SliderComponent from "./YearSliderComponent"


const MainPage: React.FC = () => {
  const startDate = new Date('2010-01-01');
  const endDate = new Date('2015-12-31'); 

  return (
    <div className="MainPage">
      <SliderComponent startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default MainPage