import Navbar from "../../NavBar/Navbar";
import { useState } from "react";
import "./NFTPage.css";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../../Footer/Footer";

export default function NFTPage(props) {
  const sampleData = {
    name: "NFT#1",
    description: "Suvisa First NFT",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    price: "0.03",
  };
  const [data, updateData] = useState(sampleData);

  return (
    <div style={{ minHeight: "100vh" }} className="NFTPage_Main">
      <Navbar></Navbar>

      <div className="NFTPageDiv">
        <div className="NFTPageDiv_left">
          <img src={data.image} alt="" className="NFTPageDiv_left_Image" />
        </div>
        <div className="NFTPageDiv_right">
          <div className="NFTPageDiv_right_content">
            <h1 className="NFTPageDiv_right_content_Header">{data.name}</h1>
            <p className="NFTPageDiv_right_content_Para">
              {data.description} .The perfect Nfts Nft Bored Ape Animated GIF
              for your conversation. Discover and Share the best GIFs on Tenor.
            </p>
            <div className="NFTPageDiv_right_content_Price">
              <div>Price:</div>
              <div className="NFTPageDiv_right_content_Price_div">
                <span className="price_span">{data.price}</span>
                <img
                  src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
                  className="eth_symbol"
                  alt=""
                />
              </div>
            </div>
            <div className="NFTPageDiv_right_content_Trade">
              <div className="NFTPageDiv_right_content_Trade_buyer">
                <h2>Owner's Wallet Address</h2>
                <p className="owner">{data.owner}</p>
              </div>
              <div className="NFTPageDiv_right_content_Trade_seller">
                <h2>Seller's Wallet Address</h2>
                <p className="seller">{data.seller}</p>
              </div>
            </div>

            <div className="NFTpage_Detail_bottom">
              <button className="enableEthereumButton NFTpage_Detail_bottom_button btn btn--color">
                Buy this NFT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
