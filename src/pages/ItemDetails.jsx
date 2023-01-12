import React, { useEffect, useState } from "react";
import axios from "axios";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";

const ItemDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchId() {
      const { data } = await axios.get(
        // `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems/${id}`
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`
        
      );
      setImages(data);
      ;
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      
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

            {images.map((image) => (
              
              <div className="row">
                
                <div className="col-md-6 text-center">
                  <img
                    src={image.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                </div>
           
                <div className="col-md-6">
                  <div className="item_info">
                    <h2>{image.title}</h2>

                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        100
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                       {image.likes}
                      </div>
                    </div>
                    <p>
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo.
                    </p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to="/author">
                              <img className="lazy" src={AuthorImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to="/author">Monica Lucas</Link>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to="/author">
                              <img className="lazy" src={AuthorImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                        
                          <div className="author_list_info">
                            <Link to="/author">Monica Lucas</Link>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <img src={EthImage} alt="" />
                        <span>{image.price}</span>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
 
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
