import NFTTile from "../../NFTTile/NFTTile";
import Navbar from "../../NavBar/Navbar";
import { useState } from "react";
import "./Marketplace.css";
import Footer from "../../Footer/Footer";
export default function Marketplace() {
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
  const [dataFetched, updateFetched] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-10">
        <div className="Marketplace_top">
          <div className="header">
            NFT <span className="header_span">Market</span>Place
          </div>
          <p className="header_description">Buy the NFTs that excites you.</p>
        </div>
        <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
          {data.map((value, index) => {
            return <NFTTile data={value} key={index}></NFTTile>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
