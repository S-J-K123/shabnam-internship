import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Slider from "react-slick";

import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Skeleton from "../UI/Skeleton";
const HotCollections = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
      );
      setPosts(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    fetchPosts();
  }, []);
  const slider = useRef(null);
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings} ref={slider}>
            {posts.map((post, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                {loading ? (
                  <Skeleton
                    width={"300px"}
                    height={"300px"}
                    borderRadius={"14%"}
                  />
                ) : (
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img
                          src={post.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={post.authorImage}
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{post.title}</h4>
                      </Link>
                      <span>{post.code}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Slider>
          <button
            className="left-btn"
            onClick={() => {
              slider.current.slickPrev();
            }}
          >
            <ChevronLeftIcon style={{ margin: "-7px", width: "20px" }} />
          </button>
          <button
            className="right-btn"
            onClick={() => {
              slider.current.slickNext();
            }}
          >
            <ChevronRightIcon
              className="right-icon"
              style={{ width: "20px" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
export default HotCollections;
