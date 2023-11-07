
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left"></div>
      <div className="navbar_right">
        <div className="navbar_right_left">Dashboard</div>

        <div className="navbar_right_right">
          <FontAwesomeIcon icon={faBell} className="large-bell-icon" />

          <div className="navbar_user_info">
            <img src="src\assets\ben-sweet-2LowviVHZ-E-unsplash.jpg" className="rounded_image"></img>
            <div className="navbar_user_info_names">
              <div className="navbar_user_info_name_top">Emmanuel Jacob</div>
              <div className="navbar_user_info_name_bottom"> Blessed Stores</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar