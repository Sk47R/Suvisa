import "./Navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [connected, toggleConnect] = useState(false);
  const location = useLocation();

  return (
    <div className="Topbar">
      <nav className="navbar">
        <div className="navbar_left">
          <Link to="/">
            {/* <img src={fullLogo} alt="" width={120} height={120} className="" /> */}
            <p className="logo">SUVISA</p>
          </Link>
          <Link to="/marketPlace">
            <div className="navbar_left_nft">NFT Marketplace</div>
          </Link>
        </div>
        <div className="navbar_right">
          <div className="navbar_right_content">
            <Link to="/marketPlace">
              <p
                className={location.pathname === "/marketPlace" ? "active" : ""}
              >
                Marketplace
              </p>
            </Link>
          </div>
          <div className="navbar_right_content">
            <Link to="/sellNFT">
              <p className={location.pathname === "/sellNFT" ? "active" : ""}>
                List My NFT
              </p>
            </Link>
          </div>
          <div className="navbar_right_content">
            <Link to="/profile">
              <p className={location.pathname === "/profile" ? "active" : ""}>
                Profile
              </p>
            </Link>
          </div>
          <div className="">
            <button className="navbar_right_button enableEthereumButton">
              {connected ? "Connected" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
