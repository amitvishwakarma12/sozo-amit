import React from "react";
import "./Header.css";
import logo from "../img/sozo.jpg";
import user from "../img/user.svg";
import Dashboard from '../Dashboard/Dashboard'
import Group_user from "../img/Group_user.svg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggeledContent = this.toggeledContent.bind(this);
    this.state = {
      humbergar: true,
      toggeled: true,
    };
  }
  toggeledContent() {
    this.setState({
      toggeled: !this.state.toggeled,
      humbergar: !this.state.humbergar,
    });
  }

  render() {
    const { humbergar } = this.state;
    const { toggeled } = this.state;
    return (
      <div
        className={`${toggeled === true ? "d-flex" : "d-flex toggled"}`}
        id="wrapper"
      >
        <div className="border-right" id="sidebar-wrapper">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action menu-head">
              <img src={logo} width="20" />

              <span className="span-title">SOZO</span>
            </li>
            <li className="list-group-item list-group-item-action btn_option">
              <div className="dropdown text-center">
                <button
                  className="btn_new_document dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  New Document
                </button>
                <button className="btn btn-primary show_add_btn" data-toggle="modal" data-target="#exampleModal3" style={{backgroundColor: "#137EF9", color: "#FFFFFF", display: "none"}}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
                <div
                  className="dropdown-menu doc-subMenu"
                  aria-labelledby="dropdownMenu2"
                >
                    <Link to="/drawing"><button className="dropdown-item" type="button">
                    <i
                      className="fas fa-desktop mr-2"
                      style={{ color: "#AAD2FF" }}
                    ></i>
                    New Whiteboard
                  </button></Link>
                  <button className="dropdown-item" type="button">
                    <i
                      className="fas fa-folder mr-2"
                      style={{ color: "#AAD2FF" }}
                    ></i>
                    New Folder
                  </button>
                </div>
              </div>
            </li>
            <div className="menu">
              
              <li className="list-group-item list-group-item-action">
                <a href="#">
                  <i className="fal fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li className="list-group-item list-group-item-action">
                <a href="#">
                  <i
                    className="fad fa-file-alt"
                    style={{ color: "#B8B8B8" }}
                  ></i>{" "}
                  <span style={{ color: "#202225" }}>Documents</span>
                </a>
              </li>
              <li className="list-group-item list-group-item-action">
                <a href="#">
                  {" "}
                  <i className="fal fa-clone" style={{ color: "#B8B8B8" }}></i>
                  <span style={{ color: "#202225" }}>Templates</span>
                </a>
              </li>
              <li className="list-group-item list-group-item-action">
                <a href="#">
                  <i
                    className="fal fa-desktop"
                    style={{ color: "#B8B8B8" }}
                  ></i>
                  <span style={{ color: "#202225" }}>Training</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light border-bottom">
            <button
              className="btn toggle_btn"
              id="menu-toggle"
              style={{ margin: "0px !important;" }}
            >
              <i
                className={`${
                  humbergar === true
                    ? "fas fa-angle-double-left"
                    : "fas fa-angle-double-right"
                }`}
                onClick={this.toggeledContent}
                style={{ color: "#137EF9" }}
              ></i>
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="navbar-toggler-icon"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <input type="text" className="search_box" placeholder="Search.." name="search" />
                    <button type="submit" className="search_btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell notification_btn"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">
                  <h6><b>Notifications</b> 
                  <label style={{float: "right", marginLeft: "15px", color: "#137EF9"}}>Clear All</label>
                  <span style={{float: "right"}}>
                    <i class="fas fa-cog" style={{color: "#137EF9"}}></i>
                   </span>
                 </h6>
                </a>
                
                <ul class="list-group">
                  <li class="list-group-item" style={{border: "none"}}>  
                    <a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col-md-2">
                          <img src={Group_user} width="35"/>
                        </div>
                        <div class="col-md-10">
                            <label style={{marginBottom: "0px"}}>John Shared New document</label>
                            <p style={{fontSize: "12px", color: "#919191"}}>December 3, 20 - 02:26 Am</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul class="list-group">
                  <li class="list-group-item" style={{border: "none"}}>  
                    <a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col-md-2">
                      <img src={Group_user} width="35"/>
                        </div>
                        <div class="col-md-10">
                            <label style={{marginBottom: "0px"}}>John Shared New document</label>
                            <p style={{fontSize: "12px" ,color: "#919191"}}>December 3, 20 - 02:26 Am</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul class="list-group">
                  <li class="list-group-item" style={{border: "none"}}>  
                    <a class="dropdown-item" href="#">
                      <div class="row">
                        <div class="col-md-2">
                          <img src={Group_user} width="35"/>
                        </div>
                        <div class="col-md-10">
                            <label style={{marginBottom: "0px"}}>John Shared New document</label>
                            <p style={{fontSize: "12px" ,color: "#919191"}}>December 3, 20 - 02:26 Am</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></a>
                  <div
                    className="dropdown-menu dropdown-menu-right user-profile"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#"><i className="fas fa-user user-profile-icons"  style={{ color: "#137EF9" }}></i>
                    
                      My Profile
                    </a>
                    <a className="dropdown-item" href="#"><i className="fas fa-cog user-profile-icons"  style={{ color: "#137EF9" }}></i>
                     Settings
                    </a>
                    
                    <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt user-profile-icons"  style={{ color: "#fb081f" }}></i>
                     <a style={{ color: "#fb081f" }}>LogOut</a>
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <img src={user} width="50" />
                </li>
                <li className="nav-item">
                  <button className="Upgrade_btn">
                    <i className="fas fa-crown"></i>
                    <label>Upgrade Now</label>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <Dashboard></Dashboard>
        </div>
       
      </div>
    );
  }
}
export default Header;
