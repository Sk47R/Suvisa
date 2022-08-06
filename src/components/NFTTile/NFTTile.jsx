import { BrowserRouter as Router, Link } from "react-router-dom";
import "./NFTTile.css";
function NFTTile(data) {
  return (
    <Link to="/nftPage">
      <div className="nft_container">
        <div className="div_image">
          <img
            src={data.data.image}
            alt={data.data.name}
            className="nft_image object-cover"
          />
          <div className="image_overlay">
            <p className="image_description">Click to see the description</p>
          </div>
        </div>
        <div className="nft_container_bottom">
          <div className="nft_container_bottom_left">
            <span className="nft_container_bottom__header">
              {data.data.name}
            </span>
            <span className="nft_container_bottom__number">
              #{data.data.name.split("#")[1]}
            </span>
          </div>
          <div className="nft_container_bottom_right">
            <span className="eth_price">{data.data.price}</span>
            <img
              src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
              className="eth_image"
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NFTTile;
