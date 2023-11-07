import "./SideNav.css"

const SideNav = () => {
  return (
    <div className="side_nav">
      <div className="side_nav_top">
        <div className="side_nav_top_content">
          <div className="side_nav_element">Dashboard</div>
          <div className="side_nav_element">Product</div>
          <div className="side_nav_element"> Orders</div>
          <div className="side_nav_element">Transaction</div>
          <div className="side_nav_element">Wallet</div>
          <div className="side_nav_element">Promotions</div>
        </div>
      </div>
      <div className="side_nav_top_content">OTHERS</div>
      <div className="side_nav_top">
        <div className="side_nav_top_content">
         
          <div className="side_nav_element">Settings</div>
          <div className="side_nav_element">Support</div>
        </div>
      </div>
    </div>
  );
}

export default SideNav