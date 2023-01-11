import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { useRef } from "react";
import Skeleton from "../UI/Skeleton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "react-slick";
import Timer from "../Timer";

const NewItems = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);








  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchImages() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
      );
      setImages(data);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      console.log(data);
    }
    fetchImages();
  });



  

  const slider = useRef(null);
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <Slider {...settings} ref={slider}>
            {images.map((image, index) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  {loading ? (
                    <Skeleton
                      width={"300px"}
                      height={"450px"}
                      borderRadius={"14%"}
                    />
                  ) : (
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <Link
                          to="/author"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Creator: Monica Lucas"
                        >
                          <img
                            className="lazy"
                            src={image.authorImage}
                            alt=""
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      {image.expiryDate ? (
                        <div className="de_countdown">
                          {" "}
                          <Timer expiryDate={image.expiryDate} />{" "}
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

                        <Link to={`/item-details/${image.nftId}`}>
                          <img
                            src={image.nftImage}
                            className="lazy nft__item_preview"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft__item_info">
                        <Link to="/item-details">
                          <h4>{image.title}</h4>
                        </Link>
                        <div className="nft__item_price">{image.price} ETH</div>
                        <div className="nft__item_like">
                          <i className="fa fa-heart"></i>
                          <span>{image.likes}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </Slider>
          <div className="carousel-container">
            <div className="container">
              <button
                className="item-lb"
                onClick={() => {
                  slider.current.slickPrev();
                }}
              >
                <ChevronLeftIcon style={{ width: "20px" }} />
              </button>
              <button
                className="item-rb"
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
        </div>
      </div>
    </section>
  );
};

export default NewItems;
