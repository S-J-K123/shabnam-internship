import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import TopSellersSkeleton from "../TopSellersSkeleton";

const TopSellers = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
      );
      setPosts(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      console.log(data);
    }
    fetchPosts();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            {
              loading ? (
                <TopSellersSkeleton posts={posts} width={"200px"}/>
              ) : (
                   <ol className="author_list">
              {posts.map((post, index) => {
                return (
                  <li key={index}>
                    <div className="author_list_pp">
                      <Link to={`/author/${post.authorId}`}>
                        <img
                          className="lazy pp-author"
                          src={post.authorImage}
                          alt=""
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Link to={`/author/${post.authorId}`}>{post.authorName}</Link>
                      <span>{post.price}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
              )
            }
         

          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
