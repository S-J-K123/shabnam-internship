import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderExplore = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="col-lg-12">
      <div className="items_filter">
        <form
          action="blank.php"
          className="row form-dark"
          id="form_quick_search"
          method="post"
          name="form_quick_search"
        >
          <div className="col text-center">
            <input
              className="form-control"
              id="name_1"
              name="name_1"
              placeholder="search item here..."
              type="text"
            />{" "}
            <a href="#" id="btn-submit">
              <i className="fa fa-search bg-color-secondary"></i>
            </a>
            <div className="clearfix"></div>
          </div>
        </form>

        <div id="item_category" className="dropdown"     data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
>
          <a href="#" className="btn-selector" >
            All categories
          </a>
          <ul>
            <li className="active">
              <span>All categories</span>
            </li>
            <li>
              <span>Art</span>
            </li>
            <li>
              <span>Music</span>
            </li>
            <li>
              <span>Domain Names</span>
            </li>
            <li>
              <span>Virtual World</span>
            </li>
            <li>
              <span>Trading Cards</span>
            </li>
            <li>
              <span>Collectibles</span>
            </li>
            <li>
              <span>Sports</span>
            </li>
            <li>
              <span>Utility</span>
            </li>
          </ul>
        </div>

        <div id="buy_category" className="dropdown">
          <a href="#" className="btn-selector">
            Buy Now
          </a>
          <ul>
            <li className="active">
              <span>Buy Now</span>
            </li>
            <li>
              <span>On Auction</span>
            </li>
            <li>
              <span>Has Offers</span>
            </li>
          </ul>
        </div>

        <div id="items_type" className="dropdown">
          <a href="#" className="btn-selector">
            All Items
          </a>
          <ul>
            <li className="active">
              <span>All Items</span>
            </li>
            <li>
              <span>Single Items</span>
            </li>
            <li>
              <span>Bundles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderExplore;
