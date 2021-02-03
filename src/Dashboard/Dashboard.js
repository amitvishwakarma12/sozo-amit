import React from 'react'
import './Dashboard.css';
import Group_user from "../img/Group_user.svg"
import copy from "../img/copy.png"
import share_profile_img from "../img/share_profile_img.svg"
import edit_icon from "../img/edit_icon.svg"
import comment_icon from "../img/comment_icon.svg"
import view_icon from "../img/view_icon.svg"
import check_icon from "../img/check_icon.svg"
import collaboration_icon from "../img/collaboration_icon.svg"
import coll_user from "../img/coll_user.svg"
import collaborat_icon from "../img/collaborat_icon.svg"
import coll_tag from "../img/coll_tag.svg"
import S1 from "../img/s1.JPG"
import sozo from "../img/sozo.jpg"
import rect from "../img/rect.svg"
class Dashboard extends React.Component{

    render(){
        return(
            <div class="container-fluid Dashboard">
            <h3  className=""><strong>Welcome, Tayyabzeb!</strong></h3>
            <nav class="nav">
              <a class="nav-link active" href="#">Recent Document</a>
              <a class="nav-link" href="#" style={{color: "#B8B8B8"}}>Recommend Documents</a>
            </nav>
            <div class="row template_list">
                <div class="col-md-3 ">
                <div class="template_img"></div>
                <div class="vertical-center">
                  <button class="view_template_btn">Tap to Open</button>
                  <img src={Group_user} class="user"/>
                </div>
                <div class="row share_more">
                  <div class="col-md-6">
                    <a  data-toggle="modal" data-target="#exampleModal2"> 
                      <i class="fas fa-share share_icon"></i>
                    </a>
                      
                    <h6 class="share_opt_btn">Share</h6>
                  </div>
                  <div class="col-md-6">
                    <div class="dropdown show">
                      <a class="btn_more_opt" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-h more_icon"></i>
                      </a>
                      <div class="dropdown-menu more_list" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Open</a>
                        <a class="dropdown-item" href="#"  data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo">Rename</a>

                        
                        <a class="dropdown-item" href="#">Delete</a>
                        <a class="dropdown-item" href="#"data-toggle="modal" data-target="#exampleModalCenter">Share</a>
                        <a class="dropdown-item" href="#">Add to starred</a>
                        <a class="dropdown-item" href="#">Get Changed Notifications</a>
                      </div>
                    </div>
                    <h6 class="more_opt_btn">More</h6>
                  </div>
                </div>
                {/* <!-- ********************************Modal on share withh others*************** --> */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle"><strong>Share with others</strong></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <h6>Link share is on <span style={{float:'right', color: '#B8B8B8'}}>Shareable link
                            <img src={check_icon} style={{width:"20"}}/></span></h6>
                          <select class="added_share_option">
                            <option>Edit and share ( public )</option>
                             <option>Edit and share ( public )</option>
                          </select>
                          <div class="input-group mb-3">
                            <input type="text" class="form-control input_copy_button" placeholder="https://www.flaticon.com/free-icon/copy-content_60990?term=copy&page" aria-describedby="button-addon2"/>
                            <button class="btn copy_input_button" type="button" id="button-addon2"> <img src={copy}/>Copy</button>
                          </div>
                          </div>
                          <div>
                            <hr/>
                          </div>
                          <h5 className="lbl-people">People</h5>
                          <div class="input-group">
                            <input type="text" class="form-control people_input_button" placeholder="Add more people here...." aria-describedby="button-addon2"/>

                            <div class="dropdown">
                              <button class="btn people_drop_button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  <img src={share_profile_img} />
                                <i class="fas fa-caret-down"></i>
                              </button>
                              <div class="dropdown">
                                <div class="dropdown-menu add_more_user_btn" aria-labelledby="dropdownMenuButton">
                                  <a class="dropdown-item active" href="#"> <img src={share_profile_img} />Edit and Share</a>
                                  <a class="dropdown-item" href="#"><img src={edit_icon} />Edit</a>
                                  <a class="dropdown-item" href="#"><img src={comment_icon} />Comment</a>
                                   <a class="dropdown-item" href="#"><img src={view_icon} />View</a>
                                 </div>
                              </div>
                            </div>
                          </div>
                          <p className="lbl-shared">Shared with John Doe +3 more. Edit</p>
                         <textarea rows="4" class="share_comment" placeholder="Add Custom Comments here..."></textarea>
                        <div class="modal-footer">
                           <button type="button" class="btn btn-secondary can_share_btn " data-dismiss="modal">Cancel</button>
                          <button type="button" class="btn btn-secondary adv_share_btn" data-toggle="modal" data-target="#exampleModal">Advanced</button>
                          <button type="button" class="btn btn-primary">Done</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ***************** Modal Start ****************** --> */}

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog" role="document">
       <div class="modal-content" style={{width: "130%"}}>
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Advanced Share Settings</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body" style={{padding: "0px"}}>
           <div class="d-flex align-items-start">
               <div class="nav flex-column Collaboration_list nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                 <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><img src={collaboration_icon} />With Collaboration</a>
                 <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><img src={collaborat_icon} />With Collaboration</a>
                 <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><img src={collaborat_icon} />With Collaboration</a>
                 <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><img src={collaborat_icon} />With Collaboration</a>
                 <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><img src={collaborat_icon} />With Collaboration</a>
               </div>
               <div class="tab-content" id="v-pills-tabContent">
                 <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                   <h5 className="lbl-Collaborations" >Add Collaborations</h5>
                   <div className="add-lbl-Collaborations">
                     <input type="radio" id="People"  value="People"/>
                     <label for="People">People</label>
                     <span className="lbl-Shareable" >
                       <input type="radio" id="Shareable Link" value="Shareable Link"/>
                     <label for="Shareable Link">Shareable Link</label>
                     </span>
                     <br/>
                   </div>

                   <div class="input-group advance-section" >
                     <input type="text" class="form-control input_drop_button" placeholder="Add more people here...." aria-describedby="button-addon2"/>
                     <div class="dropdown">
                       <button class="btn drop_input_button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  <img src={share_profile_img} className="drop_input-img" />
                         <i class="fas fa-caret-down"></i>
                       </button>
                       <div class="dropdown">
                         <div class="dropdown-menu add_more_user_btn" aria-labelledby="dropdownMenuButton">
                           <a class="dropdown-item" href="#" style={{color: "#137EF9"}}> <img src={share_profile_img} />Edit and Share</a>
                           <a class="dropdown-item" href="#"><img src={edit_icon} />Edit</a>
                           <a class="dropdown-item" href="#"><img src={comment_icon} />Comment</a>
                            <a class="dropdown-item" href="#"><img src={view_icon} />View</a>
                          </div>
                       </div>
                     </div>
                   </div>

                   <textarea rows="4" class="share_comment" placeholder="Add Custom Comments here..." style={{width: "90%"}}></textarea>
                    <button type="button" class="btn btn-primary" style={{marginLeft: "360px"}}>Share</button>
                   <h5>Collaborations</h5>
                   <ul class="list-group" style={{marginBottom: "10px", marginRight: "30px"}}>
                     <li class="list-group-item coll_list">
                       <div class="row">
                         <div class="col-md-2"><img src={coll_user} style={{marginLeft: "15px"}}/></div>
                         <div class="col-md-5"><label>Chad Ingram</label></div>
                         <div class="col-md-5"><label>Owner</label></div>
                       </div>
                     </li>
                     <li class="list-group-item coll_list" style={{marginTop: "10px"}}>
                       <div class="row">
                         <div class="col-md-2"><img src={coll_tag} style={{marginLeft: "15px"}}/></div>
                         <div class="col-md-5"><label style={{color: "#137EF9"}}>Chad Ingram</label></div>
                         <div class="col-md-5"><p>Can Edit & Share</p></div>
                       </div>
                     </li>
                     <li class="list-group-item coll_list" style={{marginTop: "10px"}}>
                       <div class="row">
                         <div class="col-md-2"><img src={coll_user} style={{marginLeft: "15px;"}}/></div>
                         <div class="col-md-5"><label>Chad Ingram</label></div>
                         <div class="col-md-5"><p>Can Edit & Share</p></div>
                       </div>
                     </li>
                     <li class="list-group-item coll_list" style={{marginTop: "10px"}}>
                       <div class="row">
                         <div class="col-md-2"><img src={coll_user} style={{marginLeft: "15px;"}}/></div>
                         <div class="col-md-5"><label>Chad Ingram</label></div>
                         <div class="col-md-5"><p>Can Edit & Share</p></div>
                       </div>
                     </li>
                   </ul>
                 </div>
                 <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"></div>
                 <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                 <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
               </div>
             </div>
         </div>
       </div>
     </div>
   </div>
   {/* <!-- ******************Modal One Rename Doc ******************** --> */}
   <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header rename_head">
                          <h5 class="modal-title" id="exampleModalLabel"><strong>Rename Document</strong></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="form-group">
                              <label for="recipient-name" class="col-form-label">Enter your new document Name:</label>
                              <input type="text" class="form-control" id="recipient-name"/>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer rename_doc_btn">
                          <button type="button" class="btn btn-secondary cancel_btn"            data-dismiss="modal">Cancel</button>
                          <button type="button" class="btn btn-primary rename_btn">Rename</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header name_before">
                        <h5 class="modal-title" id="exampleModalLabel"> <strong>Name Before Sharing</strong></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Please name your untitled document before sharing:</label>
                            <input type="text" class="form-control" id="recipient-name"/>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer rename_doc_btn">
                        <button type="button" class="btn btn-secondary skip_btn " style={{border: "1px solid #B8B8B8"}}>Skip</button>
                        <button type="button" class="btn btn-primary save_btn">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--*********************button new doc***************************  --> */}
                <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header new_doc_head">
                            <h5 class="modal-title" id="exampleModalLabel">New Document</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="far fa-times"></i>
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body text-center">
                            <img src={S1} width="300"/>
                              <p>Create New Documents & Share with your friends <style type="text-center"></style></p>
                          </div>
                          <div class="modal-footer new_doc_btn">
                            <button type="button" class="btn btn-outline-primary get_btn">Get Started!</button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>



                


               

                
                <div class="col-md-3">
                <div class="template_img">
               </div>
               <div class="vertical-center">
                <button class="view_template_btn">Tap to Open</button>
                <img src={Group_user} class="user"/>
              </div>
              <div class="row template_name">
                <div class="col-md-2" style={{paddingRight: "0px;"}}>
                  <img src={sozo} width="15"/>
                </div>
                <div class="col-md-10" style={{paddingLeft: "0px"}}>
                  <label style={{fontWeight: "800", fontSize: "15px", margin: "0px"}}>Align Original SiteMap</label>
                  <h6 style={{color: "#A2A2A2", fontSize: "12px"}}>Open an hour ago</h6>
                </div>
              </div>

                </div>
                <div class="col-md-3">
                <div class="template_img">
               </div>
               <div class="vertical-center">
                <button class="view_template_btn">Tap to Open</button>
                <img src={Group_user} class="user"/>
              </div>
              <div class="row template_name">
                <div class="col-md-2" style={{paddingRight: "0px"}}>
                  <img src={sozo} width="15"/>
                </div>
                <div class="col-md-10" style={{paddingLeft: "0px"}}>
                <label style={{fontWeight: "800", fontSize: "15px", margin: "0px"}}>Align Original SiteMap</label>
                  <h6 style={{color: "#A2A2A2", fontSize: "12px"}}>Open an hour ago</h6>
                </div>
              </div>
                </div>
                <div class="col-md-3">
                <div class="template_img">
               </div>
               <div class="vertical-center">
                <button class="view_template_btn">Tap to Open</button>
                <img src={Group_user} class="user"/>
              </div>
              <div class="row template_name">
                <div class="col-md-2" style={{paddingRight: "0px"}}>
                  <img src={sozo} width="15"/>
                </div>
                <div class="col-md-10" style={{paddingLeft: "0px"}}>
                <label style={{fontWeight: "800", fontSize: "15px", margin: "0px"}}>Align Original SiteMap</label>
                  <h6 style={{color: "#A2A2A2", fontSize: "12px"}}>Open an hour ago</h6>
                </div>
              </div>
                </div>
                
            </div>
            <div style={{marginTop: "10%", backgroundColor: "#F6FBFE"}}>
            <h5 style={{textAlign: "center", fontWeight: "800"}}>What you like to do!</h5>  
            <div class="row" style={{marginTop: "40px"}}>
              <div class="col-md-4" style={{textAlign: "right"}}>
                <img src={rect}/>
                <i class="fas fa-users team_work_icon"></i>
                <p style={{color: "#137EF9" ,marginTop: "5px"}}>Better Teamwork together</p>
              </div>
              <div class="col-md-4" style={{textAlign: "center"}}>
                <img src={rect}/>
                <i class="fas fa-magic quick_action"></i>
                <p style={{color: "#137EF9", marginTop: "5px"}}>How to Quick Action</p>
              </div>
              <div class="col-md-4">
                <img src={rect}/>
                <i class="far fa-clipboard notes_icon"></i>
                <p style={{color: "#137EF9", marginTop: "5px"}}>Stay focus with Notes</p>
              </div>
            </div>
          </div>
            </div>

       
        )
    }
}
export default Dashboard