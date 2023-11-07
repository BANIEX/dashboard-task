import MainPageFirstLayer from "../MainPageFirstLayer/MainPageFirstLayer"
import MainPageSecondLayer from "../MainPageSecondLayer/MainPageSecondLayer"
import MainPageThirdLayer from "../MainPageThirdLayer/MainPageThirdLayer"
import "./MainPage.css"

const MainPage = () => {
  return (
    <div className="main_page">
      <MainPageFirstLayer/>
      <MainPageSecondLayer/>
      <MainPageThirdLayer/>
      
      
    </div>
  )
}

export default MainPage