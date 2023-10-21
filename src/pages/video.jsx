import React from "react"
import Navigation from "../components/Navigation/Navigation";
import {FiSettings,FiSearch,FiHome}from 'react-icons/fi';
import{RiLiveLine}from 'react-icons/ri';
import{TfiVideoClapper} from 'react-icons/tfi';
import{BsRocketTakeoff} from 'react-icons/bs';
import{MdMoreHoriz} from 'react-icons/md';
import {FaRegThumbsUp,FaCommentAlt,FaRegShareSquare}from 'react-icons/fa';
import './video.css'

const Video = () => {
    return(
        <div className="row">
            <div className="col-6">
        <div className="lside pt-5 ">
        <h4 className="head">Vedio</h4 >
<div className="searchbar mb-4" >< FiSearch className="me-4"/>Search
      </div>



      <h5 className="h5 mb-4 "><FiHome className="fi"  size="30px"/>Home</h5>
      <h5 className="h5 mb-4"><RiLiveLine className="fi"  size="30px"/>Live</h5>
      
<h5 className="h5 mb-4"><TfiVideoClapper className="fi"  size="30px"/>Shows</h5>
<h5 className="h5 mb-4"><BsRocketTakeoff className="fi"  size="30px"/>Explore more</h5>

        </div></div>
        <div className="col-6">
        <div className="Rside">
        <div className="Posted">
                        <div className="poster">
                            <div className="Simp">
                                <img src="/images/pho.jpg" alt="Img" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                                Youtube
                                <div className="update"></div>
                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                        </div>
                        <div className="caption">
                             Like and Subscribe to our YouTube Channel.
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BiDOehqG68g?si=l-Lhu21s-OY5KAMj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     
                       
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="red"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="blue"/>Share
                            </div>
                        
                        </div>
                    </div><br></br>
                    <br></br>
                    <div className="Posted">
                        <div className="poster">
            
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                        </div>
                    
                        <br></br>
                        <div className="FacebookImg">
                        <iframe
  src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F100094545882913%2Fvideos%2F962276775069990%2F&show_text=true&width=560&t=0"
  width={560}
  height={300}
  style={{ border: 'none', overflow: 'hidden' }}
  scrolling="no"
  frameBorder={0}
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
></iframe>

                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="red"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="blue"/>Share
                            </div>
                        
                        </div>
                    </div>
        </div></div>
             <Navigation/>
        </div>
    );
}
export default Video;