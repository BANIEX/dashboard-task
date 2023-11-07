import MainPage from "../MainPage/MainPage"
import SideNav from "../SideNav/SideNav"
import "./SecondLayer.css"

const SecondLayer = () => {
  return (
    <div className="second_layer">
      <SideNav/>
      <MainPage/>
    </div>
  )
}

export default SecondLayer