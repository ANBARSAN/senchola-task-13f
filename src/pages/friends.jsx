import React from "react"
import Navigation from "../components/Navigation/Navigation";
import './store.css'
import {FiSearch,FiSettings}from 'react-icons/fi';
import{AiOutlineShop,AiOutlineInbox,AiTwotoneShopping}from 'react-icons/ai';
import{MdGroups2,MdOutlineGroup }from "react-icons/md";
import{FaBirthdayCake }from "react-icons/fa";
import{IoMdNotificationsOutline}from 'react-icons/io';
import{CiShoppingTag}from 'react-icons/ci';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Friends=()=>{
    return(
<div className="store">
<div className="row">
     <div className="col-md-6">
<div className="index" style={{position:"fixed"}}>
<h4 className="head">Friends</h4 >
<div className="searchbar mb-4" >< FiSearch className="me-4"/>Search 
      </div>
      <h6 className="h5 mb-4"><AiOutlineShop className="fi" size="30px"/>Home</h6>
      <h6 className="h5 mb-4"><MdOutlineGroup className="fi" size="30px"/>Friend Requests</h6>
      <h6 className="h5 mb-4"><MdOutlineGroup className="fi" size="30px"/>Suggestion</h6>
      <h6 className="h5 mb-4"><MdGroups2 className="fi" size="30px"/>All friends</h6>
      <h6 className="h5 mb-4"><FaBirthdayCake className="fi" size="30px"/>Birthdays</h6>

</div>
    </div> 
    <div className="col-md-6 mt-3" style={{margin:"1px"}}>

<div className="market mt-5">
<CardGroup classname="g" style={{gap:"22px",width:"600px"}}>
      <Card classname="card mx-5" style={{height:"310px"}}>
        <Card.Img variant="top" src="/images/dp6.png" />
        <Card.Body>
          <Card.Text>
            Anbarasan
          </Card.Text>
          <a class="blue btn-flat white-text text-center bbn" style={{width:"150px"}} href="#">Confirm</a>
            <a class="btn-flat btn-secondary text-center bbn" style={{width:"150px"}} href="#">Delete</a>
        </Card.Body>
      </Card>
      <Card classname="card mx-5" style={{height:"310px"}}>
        <Card.Img variant="top" src="/images/dp3.png" />
        <Card.Body>
          <Card.Text>
            jayaraj
          </Card.Text>
          <a class="blue btn-flat white-text text-center bbn" style={{width:"150px"}} href="#">Confirm</a>
            <a class="btn-flat btn-secondary text-center bbn" style={{width:"150px"}} href="#">Delete</a>
          
          
        </Card.Body>
      </Card>
      <Card classname="card mx-5" style={{height:"310px"}}>
        <Card.Img variant="top" src="/images/dp9.png" />
        <Card.Body>
          <Card.Text>
            Harris kalyan
          </Card.Text>
          <a class="blue btn-flat white-text text-center bbn" style={{width:"150px"}} href="#">Confirm</a>
            <a class="btn-flat btn-secondary text-center bbn" style={{width:"150px"}} href="#">Delete</a>
          
          
        </Card.Body>
      </Card>
    </CardGroup>



    <CardGroup classname="mt-3" style={{gap:"22px",width:"600px"}}>
      <Card classname="card mx-5" style={{height:"310px"}}>
        <Card.Img variant="top" src="/images/dp9.png" />
        <Card.Body>
          <Card.Text>
            Anbarasan
          </Card.Text>
          <a class="blue btn-flat white-text text-center bbn" style={{width:"150px"}} href="#">Confirm</a>
            <a class="btn-flat btn-secondary text-center bbn" style={{width:"150px"}} href="#">Delete</a>
        </Card.Body>
      </Card>
      <Card classname="card mx-5" style={{height:"310px"}}>
        <Card.Img variant="top" src="/images/dp3.png" />
        <Card.Body>
          <Card.Text>
            jayaraj
          </Card.Text>
          <a class="blue btn-flat white-text text-center bbn" style={{width:"150px"}} href="#">Confirm</a>
            <a class="btn-flat btn-secondary text-center bbn" style={{width:"150px"}} href="#">Delete</a>
          
          
        </Card.Body>
      </Card>
      <Card classname="card mx-5" style={{height:"310px"}}>
        <Card.Img variant="top" src="/images/dp6.png" />
        <Card.Body>
          <Card.Text>
            Harris kalyan
          </Card.Text>
          <a class="blue btn-flat white-text text-center bbn" style={{width:"150px"}} href="#">Confirm</a>
            <a class="btn-flat btn-secondary text-center bbn" style={{width:"150px"}} href="#">Delete</a>
          
          
        </Card.Body>
      </Card>
    </CardGroup>




</div>
    </div>
</div>

    <Navigation/>
</div>
    );
}
export default Friends;