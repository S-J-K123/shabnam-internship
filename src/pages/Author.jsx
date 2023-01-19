import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";



const Author = () => {
  const { id } = useParams();
  const [authors, setAuthors] = useState([]);
  
  





  


  // useEffect(() => {
  //   async function getId() {
  //     const { data } = await axios.get(
  //       `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
  //     );
  //     setAuthors(data);
  //     console.log(data)

  //   }
    
  //   getId();
  // }, [id]);



  
  useEffect(() => {
    async function getId() {
          const response = await fetch ("https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=73855012")
          const data = await response.json()
        console.log(data)
        const author = authors.find(author => author.id === id)
        console.log(authors)

    }
    
    getId();
  }, [id]);




   



// useEffect(() => {
//   async function main() {
//     const response = await fetch ("https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=73855012")
//     const data = await response.json()
//     console.log(data)
   
//   }
//   main()
// }, [])









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
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={AuthorImage} alt="" />


{
  authors?.map((author) => {
    return(
            <div className="profile_name">
                        <h4>
                          Monica Lewis
                          <span className="profile_username">@monicaaaa</span>
                          <span id="wallet" className="profile_wallet">
                            UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
    )
  })
}
                      <i className="fa fa-check"></i>
                
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{authors.followers}</div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems />
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
