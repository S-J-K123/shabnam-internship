import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "@mui/material";
import AuthorSkeleton from "../components/UI/AuthorSkeleton";

const Author = () => {
  

  const { id } = useParams();
  const [author, setAuthors] = useState({});
  const [loading, setLoading] = useState(true);
  const [showFollow, setShowFollow] = useState(false);
  const [follow, setFollow] = useState({followers: 0})



  const handleFollow = () => {
    setFollow(prevFollow => {
        return { ...prevFollow, followers: prevFollow.followers + 1 }
    });
}



  const loadingCards = [...Array(8)].map((e, i) => (
    <Skeleton
      className="skeleton-author"
      width={"250px"}
      height={"470px"}
      key={i}
    />
  ));



  // function increment() {
  //   setAuthors({ ...author, followers: author.followers + 1 });
  // }

  // function decrement() {
  //   setAuthors({ ...author, followers: author.followers - 1 });
  // }



  useEffect(() => {
    axios
      .get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=" +
          id
      )
      .then((data) => {
        console.log(data.data);
        setAuthors(data.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [id]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {loading ? (
                <AuthorSkeleton />
              ) : (
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={author.authorImage} alt="" />

                        <div className="profile_name">
                          <h4>
                            {author.authorName}
                            <span className="profile_username">
                              {author.tag}
                            </span>
                            <span id="wallet" className="profile_wallet">
                              {author.address}
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>

                        <i className="fa fa-check"></i>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {author.followers} followers
                        </div>
                        <Link
                          to="#"
                          className="btn-main"
                          onClick={() => setShowFollow(!showFollow)} 
                        
                        >
                          {!showFollow ? "Follow" : "Unfollow"}
                        </Link>
                    
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  {loading ? (
                    loadingCards
                  ) : (
                    <AuthorItems
                      nftCollection={author.nftCollection}
                      authorImage={author.authorImage}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
