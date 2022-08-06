import { BrowserRouter as Router, Link } from "react-router-dom";
import "./NFTTile.css";
function NFTTile(data) {
  const newTo = {
    pathname: "/nftPage/" + data.data.tokenId,
  };
  return (
    <Link to={newTo}>
      {/* <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
        <img
          src={data.data.image}
          alt=""
          className="w-72 h-80 rounded-lg object-cover"
        />
        <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
          <strong className="text-xl">{data.data.name}</strong>
          <p className="display-inline">{data.data.description}</p>
        </div>
      </div> */}

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
