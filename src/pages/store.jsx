import React from "react"
import Navigation from "../components/Navigation/Navigation";
import './store.css'
import {FiSearch,FiSettings}from 'react-icons/fi';
import{AiOutlineShop,AiOutlineInbox,AiTwotoneShopping}from 'react-icons/ai';
import{IoMdNotificationsOutline}from 'react-icons/io';
import{CiShoppingTag}from 'react-icons/ci';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

const Store=()=>{
    return(
<div className="store">
<div className="row">
     <div className="col-md-6">
<div className="index" style={{position:"fixed"}}>
<h4 className="head">Store</h4 >
<div className="searchbar mb-4" >< FiSearch className="me-4"/>Search 
      </div>
      <h6 className="h5 mb-4"><AiOutlineShop className="fi" size="30px"/>Browse all</h6>
      <h6 className="h5 mb-4"><IoMdNotificationsOutline className="fi" size="30px"/>Notification</h6>
      <h6 className="h5 mb-4"><AiOutlineInbox className="fi" size="30px"/>Inbox</h6>
      <h6 className="h5 mb-4"><AiTwotoneShopping className="fi" size="30px"/>Buying</h6>
      <h6 className="h5 mb-4"><CiShoppingTag className="fi" size="30px"/>Selling</h6>

</div>
    </div> 
    <div className="col-md-12 mt-0">

<div className="market">
<div id="friendrequest" className="col s12" style={{width:"800px"}}>
<div id="store" className="">

<div className="post">
  <a className="blue btn-flat white-text" href="#">Product</a>
  <a className="btn-flat btn-secondary" href="#">Category</a>
  <a className="btn-flat btn-secondary" href="#">Price</a>
</div>
<div className="row">
  <div className="col s6 m4">
    <img src="/images/42-inch-full-hd-led-tv.jpg" alt="store-item" className="responsive-img mt-4"/>
    
  </div>
  <div class="col s6 m4">
    <img src="/images/42-inch-full-hd-led-tv.jpg" alt="store-item" className="responsive-img mt-4"/>
    
  </div>
  <div class="col s6 m4">
    <img src="/images/42-inch-full-hd-led-tv.jpg" alt="store-item" className="responsive-img mt-4"/>
    
  </div>
 
  
</div>
</div>
  </div>




</div>
    </div>
</div>

    <Navigation/>
</div>
    );
}
export default Store;