import React from "react";
import "./home.css";
import Logo from "../../assets/rick_and_morty_logo.png";
import CharaterSearch from "../../assets/home_images/home_link_bg_1.png";
import Quots from "../../assets/home_images/home_link_bg_2.png";
import Photos from "../../assets/home_images/home_link_bg_3.png";
import MobileWormhole from "../../assets/home_images/wormhole.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home_container">
      <div className="mobile_wormhole">
        <img
          src={MobileWormhole}
          alt="Rick and Morty Wormhole"
          className="logo"
        />
      </div>
      <div className="home_left_container">
        {/* ---------------------------------Logo */}
        <Link to="/">
          <div className="logo_container">
            <img src={Logo} alt="Rick and Morty Logo" className="logo" />
          </div>
        </Link>

        {/* ---------------------------------Links */}
        <div className="home_links_outer_container">
          <Link to="/allCharacters">
            <div className="links_inner_container">
              <h1 className="links_h1">Characters</h1>
              <img src={CharaterSearch} alt="" className="home_links_img" />
            </div>
          </Link>
          <Link to="/">
            <div className="links_inner_container">
              <h1 className="links_h1">Quots</h1>
              <img src={Quots} alt="" className="home_links_img" />
            </div>
          </Link>
          <Link to="/">
            <div className="links_inner_container">
              <h1 className="links_h1">Photos</h1>
              <img src={Photos} alt="" className="home_links_img" />
            </div>
          </Link>
        </div>
      </div>
      <div className="home_right_container"></div>
    </div>
  );
}
