import React from "react";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import { AiOutlineSearch, AiFillHome} from "react-icons/ai";
import { BsBellFill} from "react-icons/bs";
import { IoStorefrontOutline, IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import{PiVideoFill} from "react-icons/pi";
import{MdGroups2,MdOutlineGroup }from "react-icons/md";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'; 
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="sm" className="nav">
      <Container>
        <Navbar.Brand>
          
          <BsFacebook className=" icon text-primary"size="40px" style={{left:"-70px",position:"relative"}} />
        </Navbar.Brand><div className="searching"style={{left:"-80px",position:"relative",width:"200px"}}>
        <AiOutlineSearch  className="mb-5" size="25px" />
        <div className="pos">Serach facebook</div>
        </div>
       <NavbarCollapse className="flex justify-content-center" style={{display:"flex-grow"}}>
          <Nav className="mx-5 align-items-center">
            <Nav.Link href="/home"  className="homies"><AiFillHome className="mx-3 text-primary"size="30px" /></Nav.Link>
            <Nav.Link href="/video"  className="homies"><PiVideoFill className="mx-3  "size="30px" /></Nav.Link>
            <Nav.Link href="/store"  className="homies"><IoStorefrontOutline size="30px" className=" mx-3"/></Nav.Link>
            <Nav.Link href="/friends" className="homies"><MdOutlineGroup size="30px" className="mx-3 "/></Nav.Link>
            <Nav.Link href="/bell" className="homies"><BsBellFill size="27px" className="mx-3 "/></Nav.Link>
          </Nav>
          </NavbarCollapse>
        <div className=" icon gap-4">
          <div className="icon_wrapper text-[28px]">
            <CgMenuGridO  size="30px"/>
          </div>
          <div className="icon_wrapper text-[20px]">
            <BsMessenger size="30px" />
          </div>
          <div className="icon_wrapper text-[20px]">
            <IoNotifications size="30px" />
          </div>
          <img src="/images/pho.jpg" className="mt-4"style={{height:"30px", width:"40px",borderRadius:"60%"}}/>

        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
