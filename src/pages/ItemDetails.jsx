import React, { useEffect, useState } from "react";
import axios from "axios";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import ItemDetailsSkeleton from "../components/ItemDetailsSkeleton";

const ItemDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({});

  useEffect(() => {
    async function fetchId() {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`
      );
      setImages(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    fetchId(id);

    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
          {loading ? (
               <ItemDetailsSkeleton/>
                    ) : (
                      
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={images.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>   
                  
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    {images.title} #{images.tag}
                  </h2>
                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {images.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {images.likes}
                    </div>
                  </div>
                  <p>{images.description}</p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${images.ownerId}`}>
                            <img
                              className="lazy"
                              src={images.ownerImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        
                        <div className="author_list_info">
                          <Link to={`/author/${images.ownerId}`}>{images.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${images.ownerId}`}> 
                            <img
                              className="lazy"
                              src={images.creatorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${images.ownerId}`}>{images.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{images.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
                )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
