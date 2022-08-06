import Navbar from "../../NavBar/Navbar";
import { useState } from "react";
import "./SellNFT.css";
import Footer from "../../Footer/Footer";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
export default function SellNFT() {
  return (
    <div className="SellNFT">
      <Navbar></Navbar>
      <div className="SellNFT_Top">
        <h1 className="SellNFT_Top_Header">#AddYourNFT</h1>
      </div>
      <div className="SellNFT_Form" id="nftForm">
        <form className="">
          <h3 className="SellNFT_Form_Header">
            Upload your NFT to the marketplace
          </h3>
          <div className="SellNFT_Form_Item">
            <label className="SellNFT_Form_Item_Label" htmlFor="name">
              Name
            </label>
            <input
              className="SellNFT_Form_Item_Input"
              id="name"
              type="text"
              placeholder="Enter name"
            ></input>
          </div>
          <div className="SellNFT_Form_Item">
            <label className="SellNFT_Form_Item_Label" htmlFor="description">
              NFT Description
            </label>
            <textarea
              className="SellNFT_Form_Item_Textarea"
              cols="40"
              rows="5"
              id="description"
              type="text"
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="SellNFT_Form_Item">
            <label className="SellNFT_Form_Item_Label" htmlFor="price">
              Price (in ETH)
            </label>
            <input
              className="SellNFT_Form_Item_Input"
              type="number"
              placeholder="Enter price"
              step="0.01"
            ></input>
          </div>
          <div className="SellNFT_Form_Item_Last">
            <label className="SellNFT_Form_Item_Label label_margin_Right">
              Upload Image
            </label>
            <label className="Label_Chose_Image" htmlFor="image">
              <AddPhotoAlternateIcon className="Label_Chose_Image_Icon" />
            </label>
            <input hidden id="image" type="file"></input>
          </div>

          <button className="SellNFT_Button">List NFT</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
