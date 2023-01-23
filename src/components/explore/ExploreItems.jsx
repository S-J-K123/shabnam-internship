import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Timer from "../Timer";
const ExploreItems = () => {



  const { id } = useParams();
  const [posts, setPosts] = useState([]);


  const load= () => {
    Array.slice().map(0,4)
  }




  useEffect(() => {
    async function exploreId() {
      axios
        .get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore/"
        )
        .then((data) => {
          console.log(data.data);
          setPosts(data.data);
        });
    }
    exploreId();
  }, [id]);
  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {posts.map((post, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to="/author"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <img className="lazy" src={post.authorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            {post.expiryDate ? (
                        <div className="de_countdown">
                          {" "} 
                          <Timer expiryDate={post.expiryDate} />{" "}
                        </div>
                      ) : null}

            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <Link to="/item-details">
                <img
                  src={post.nftImage}
                  className="lazy nft__item_preview"
                  alt=""
                />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4>{post.title}</h4>
              </Link>
              <div className="nft__item_price">{posts.price}</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="col-md-12 text-center">
        <Link onClick={load} to="" id="loadmore" className="btn-main lead">
          Load more
        </Link>
      </div>
    </>
  );
};
export default ExploreItems;
