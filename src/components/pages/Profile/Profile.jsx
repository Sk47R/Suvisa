import Navbar from "../../NavBar/Navbar";
import { useState } from "react";
import NFTTile from "../../NFTTile/NFTTile";
import Footer from "../../Footer/Footer";
import "./Profile.css";

export default function Profile() {
  const sampleData = [
    {
      name: "NFT#1",
      description: "Suvisa First NFT",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
      price: "0.03",
    },
    {
      name: "NFT#2",
      description: "Suvisa Second NFT",
      image:
        "https://www.cnet.com/a/img/resize/5a9287797e44d98efa098c9c22ad9857a7cfb9e4/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200",
      price: "0.02",
    },
    {
      name: "NFT#3",
      description: "Suvisa Third NFT",
      image:
        "https://lh6.googleusercontent.com/EF6DVrCepU84x0neXNfy1n8Kto8bgYNi4wHC6ovwUwYAWe1-ivLGzNxj25-qUv4TTZnisOnZ2U40bGgvXHhJwxuCDte3n2dSg2ITgl0KSkqddZb7v0rppW0MvNHdVrCqcwkqmyj2",
      price: "0.03",
    },
  ];
  const [data, updateData] = useState(sampleData);

  return (
    <div className="profileClass" style={{ "min-height": "100vh" }}>
      <Navbar></Navbar>
      <div className="profileTop">
        <h1 className="profileTop_Header">#PROFILE</h1>
        <p className="profileTop_para">Create NFTs, people cannot resist</p>
      </div>
      <div className="profileDetail">
        <div className="profileDetail_walletAddress">
          <h2 className="profileDetail_walletAddress_Header">
            My Wallet Address:
          </h2>
          <span className="profileDetail_walletAddress_address">
            Wallet Address
          </span>
        </div>
        <div className="profileDetail_Below ">
          <div className="profileDetail_Below_content lf_margin">
            <h2 className="nft_number">No. of NFTs</h2>
            <p className="nft_number_amount"> 3</p>
          </div>
          <div className="profileDetail_Below_content">
            <h2 className="nft_number">Total Value</h2>
            <div className="value">
              <p className="nft_number_amount">0.23</p>
              <span className="eth_span">ETH</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profileClass">
        <div className="flex flex-col text-center items-center mt-11 text-white">
          <h2 className="Profile_NFT_Header">Your Collections</h2>
          <div className="flex justify-center flex-wrap max-w-screen-xl">
            {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>;
            })}
          </div>
          <div className="mt-10 text-xl">
            {data.length == 0
              ? "Oops, No NFT data to display (Are you logged in?)"
              : ""}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
