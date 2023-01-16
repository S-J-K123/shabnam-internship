import { Skeleton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TopSellersSkeleton = ({ posts }) => {
            return (
       

                <div className="row">
                <div className="col-lg-12">
                  <div className="text-center">
                
                  </div>
                </div>
                <div className="col-md-12">
             
                         <ol className="author_list">
                    {posts.map((post, index) => {
                      return (
                        <li key={index}>
                          <div className="author_list_pp">
                            <Link to="/author">
                            <Skeleton width={"50px"}
                            height={"50px"}/>
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to="/author"><Skeleton width={"130px"}/></Link>
                            <span><Skeleton width={"100px"}/></span>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                  
               
      
                </div>
              </div>
            
            );
         

}

export default TopSellersSkeleton;
