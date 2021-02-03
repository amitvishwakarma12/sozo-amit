import React from "react";
import "./Drawing.css";
import Sketch from "react-p5";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Square from "./Square";
import Rectangle from "./Rectangle";
import Stars from "./Stars";
import Circles from "./Circles";
import Diamonds from "./Diamonds";
import Hexagon from "./Hexagon";
import Triangles from "./Triangles";
import { Stage, Layer, Arrow } from "react-konva";
import Screen1 from "../img/screen1.svg";
import Screen2 from "../img/screen2.svg";
import Screen3 from "../img/screen3.svg";
import SortName from "../img/sort_name.svg";
import Konva from "konva";

class Drawing extends React.Component {
  constructor(props) {
    super(props);
    this.drawRect = this.drawRect.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
    this.drawSquare = this.drawSquare.bind(this);
    this.drawStar = this.drawStar.bind(this);
    this.drawTriangle = this.drawTriangle.bind(this);
    this.drawDiamond = this.drawDiamond.bind(this);
    this.drawHexagon = this.drawHexagon.bind(this);
    this.drawArrow = this.drawArrow.bind(this);
    this.colorlist =['#FFF1AA', '#F8AD96', '#EF5F9E','#F7C5DA','#EAE15F','#C094C1','#D5D2E2','#E2E2E2','#B8DECD','#58C2BF','#31BDDF','#AACDE9'];
    this.state = {
      id: 0,
      selectedId: "",
      rectlst: [],
      shapeX: 0,
      shapeY: 0,
      circles: [],
      square: [],
      stars: [],
      triangles: [],
      diamonds: [],
      hexagon: [],
      arrows: [],
      pickColor:null
    
    };
  }

  drawRect() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      width: 150,
      height: 80,

      id: "rect" + this.state.id,
    };
    this.setState({
      rectlst: this.state.rectlst.concat(props),
    });
  }
  drawCircle() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      radius:50,

      id: "circle" + this.state.id,
    };
    this.setState({
      circles: this.state.circles.concat(props),
    });
  }
  drawSquare() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      width: 100,
      height: 100,

      id: "square" + this.state.id,
    };
    this.setState({
      square: this.state.square.concat(props),
    });
  }
  drawStar() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
     
      numPoints:6,
        innerRadius:40,
        outerRadius:70,
      id: "star" + this.state.id,
    };
    this.setState({
      stars: this.state.stars.concat(props),
    });
  }
  drawTriangle() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      
      radius:80,

      id: "triangle" + this.state.id,
    };
    this.setState({
      triangles: this.state.triangles.concat(props),
    });
  }
  drawDiamond() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      
      radius:80,

      id: "diamonds" + this.state.id,
    };
    this.setState({
      diamonds: this.state.diamonds.concat(props),
    });
  }
  drawHexagon() {
    this.setState({
      id: this.state.id + 1,
    });
    let props = {
      x: 400,
      y: 300,
      
      radius:80,

      id: "hexagon" + this.state.id,
    };
    this.setState({
      hexagon: this.state.hexagon.concat(props),
    });
  }
  drawArrow() {
    this.setState({
      arrows: this.state.arrows.concat(1),
    });
  }

  render() {
    console.log(this.state)
    return (
      <header>
        <div class="row " style={{ margin: "20px" }}>
          <div class="col-md-3 rename_document_col">
            <img src="img/sozo.jpg" width="20" />
            <span className="renameDoc">
              <b>Rename Document</b>
              <i className="far fa-save fa-saveicon"></i>
              <a
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-align-left float-right fa-canvasMenu"></i>
              </a>
              <div className="dropdown-menu canvas_opt_list" aria-labelledby="dropdownMenuLink">
                <Link to="/drawing">
                  <a className="dropdown-item" href="#">
                    New Canvas
                  </a>
                </Link>
                <a className="dropdown-item" href="#">
                  Insert<i className="fas fa-play float-right"></i>
                </a>
                <a className="dropdown-item" href="#">
                  Export<i className="fas fa-play float-right"></i>
                </a>
                <a className="dropdown-item" href="#">
                  Duplicate
                </a>
                <a className="dropdown-item" href="#">
                  Convert to Template
                </a>
                <a className="dropdown-item" href="#">
                  Print
                </a>
                <a className="dropdown-item" href="#">
                  Show Grid
                </a>
                <a className="dropdown-item" href="#">
                  Help<i className="fas fa-play float-right"></i>
                </a>
                <a className="dropdown-item" href="#">
                  Account Settings
                </a>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </span>
          </div>
          <div className="col-md-7 text-center">
            <button className="alert text-center text-light" role="alert">
              Succesfully Saved !
            </button>
          </div>
          <div className="col-md-2 icon_btn">
            <div className="header_panel">
              <a href="">
                <i className="far fa-search"></i>
              </a>
              <a href="">
                <i className="far fa-paper-plane"></i>
              </a>
              <a href="">
                <i className="far fa-comment-alt-lines"></i>
              </a>
              <a href="">
                <i className="far fa-user-plus"></i>
              </a>
              <a href="">
                <i className="far fa-file-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row" style={{height: "600px"}}>
          <div class="col-md-1">
            <div class="sidebar">
              <ul class="list-group draw_icon">
                <li class="active">
                  {" "}
                  <i class="fas fa-location-arrow"></i>
                </li>
                <li>
                  <i class="fal fa-text"></i>
                </li>
                <li className="nav-item dropdown">
                  <i class="far fa-sticky-note"
                   id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false"
                  ></i>
                  <div
                    className="dropdown-menu dropdown-menu-right color_drop"
                    aria-labelledby="navbarDropdown"
                  >
                  {this.colorlist.map((color,index) =>(<div key={index} className="card">
                  <div style={{background: color}} className="color-pick" onClick={()=>{
                    this.setState({
                    ...this.state,
                    pickColor:color
                  })}} />
                  </div>))}
                  <div className="add_color_pick">
                      <a href=""><h6 className="add_new_color"><u>Add New</u></h6></a>
                  </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <i
                    class="fal fa-rectangle-wide"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></i>

                  <div
                    className="dropdown-menu dropdown-menu-right shapes"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="" href="#" onClick={this.drawRect}>
                      <i
                        class="fal fa-rectangle-wide shape-rectangle"
                        onClick={this.drawRect}
                      ></i>
                    </a>
                    <a className="" href="#" onClick={this.drawCircle}>
                      <i
                        className="far fa-circle shape-circle"
                        onClick={this.drawCircle}
                      ></i>
                    </a>
                    <a className="" href="#">
                      <i
                        class="fal fa-diamond shape-diamond"
                        onClick={this.drawDiamond}
                      ></i>
                    </a>

                    <a className="" href="#">
                      <i
                        class="fal fa-triangle shape-triangle"
                        onClick={this.drawTriangle}
                      ></i>
                    </a>

                    <div>
                      <a className="" href="#" onClick={this.drawStar}>
                        <i
                          class="fal fa-star shape-star"
                          onClick={this.drawStar}
                        ></i>
                      </a>
                      <a className="" href="#" onClick={this.drawSquare}>
                        <i
                          class="fal fa-square shape-square"
                          onClick={this.drawSquare}
                        ></i>
                      </a>
                      <a className="" href="#">
                        <i
                          class="fal fa-hexagon shape-hexagon"
                          onClick={this.drawHexagon}
                        ></i>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="" href="#" onClick={this.drawArrow}>
                    <i
                      class="far fa-long-arrow-right"
                      onClick={this.drawArrow}
                    ></i>
                  </a>
                </li>
                <li>
                  <i class="fal fa-edit"></i>
                </li>
              </ul>
            </div>
            <div class="sidebar_sub_menu">
              <ul class="list-group draw_icon">
                <li className="nav-item dropdown">
                  <i class="far fa-th-large"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  ></i>
                   <div
                    className="dropdown-menu dropdown-menu-right screen_container"
                    aria-labelledby="navbarDropdown"
                  >
                    <h5>Containers</h5>
                    <hr width="260"></hr>
                    <img src={Screen1}/>
                    <img src={Screen2}/>
                    <img src={Screen3}/>
                    <div className="row sort">
                      <div className="col-md-3 sort_icon">
                       <img src={SortName}/> 
                      </div>
                      <div className="col-md-9 sort_list">
                        <label><b>Sort</b></label>
                        <p>Organize sticky Notes Categories</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <i class="far fa-list"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-11 drawing" id="drawing">
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              container="drawing"
            >
              <Layer>
                {this.state.circles &&
                  this.state.circles.map((circle,i) => <Circles 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={circle}
                  isSelected={circle.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: circle.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const cirls = this.state.circles.slice();
                    cirls[i] = newAttrs;
                   
                    this.setState({
                      circles: cirls,
                    });
                  }}
                  />)}
                {this.state.rectlst &&
                  this.state.rectlst.map((rect, i) => (
                    <Rectangle
                      col={this.state.pickColor}
                      key={i}
                      shapeProps={rect}
                      isSelected={rect.id === this.state.selectedId}
                      onSelect={() => {
                        console.log("select");
                        this.setState({
                          selectedId: rect.id,
                        });
                        console.log(this.state.selectedId);
                      }}
                      onChange={(newAttrs) => {
                        const rects = this.state.rectlst.slice();
                        rects[i] = newAttrs;
                        console.log(rects);
                        this.setState({
                          rectlst: rects,
                        });
                      }}
                    />
                  ))}
                {this.state.square && this.state.square.map((sqr,i) => <Square 
                   col={this.state.pickColor}
                  key={i}
                  shapeProps={sqr}
                  isSelected={sqr.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: sqr.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const squrs = this.state.square.slice();
                    squrs[i] = newAttrs;
                   
                    this.setState({
                      square: squrs,
                    });
                  }}
                
                />)}

                {this.state.triangles &&
                  this.state.triangles.map((triangl,i) => <Triangles 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={triangl}
                  isSelected={triangl.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: triangl.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const triangl = this.state.triangles.slice();
                    triangl[i] = newAttrs;
                   
                    this.setState({
                      triangles: triangl,
                    });
                  }}
                  />)}

                {this.state.stars && this.state.stars.map((star,i) => <Stars 
                 col={this.state.pickColor}
                key={i}
                shapeProps={star}
                isSelected={star.id === this.state.selectedId}
                onSelect={() => {
                
                  this.setState({
                    selectedId: star.id,
                  });
                  console.log(this.state.selectedId);
                }}
                onChange={(newAttrs) => {
                  const strs = this.state.stars.slice();
                  strs[i] = newAttrs;
                 
                  this.setState({
                    stars: strs,
                  });
                }}
                />)}

                {this.state.diamonds &&
                  this.state.diamonds.map((diamds,i) => <Diamonds 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={diamds}
                  isSelected={diamds.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: diamds.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const diamd = this.state.diamonds.slice();
                    diamd[i] = newAttrs;
                   
                    this.setState({
                      diamonds: diamd,
                    });
                  }}
                  />)}

                {this.state.hexagon &&
                  this.state.hexagon.map((hexa,i) => <Hexagon 
                  col={this.state.pickColor}
                  key={i}
                  shapeProps={hexa}
                  isSelected={hexa.id === this.state.selectedId}
                  onSelect={() => {
                  
                    this.setState({
                      selectedId: hexa.id,
                    });
                    console.log(this.state.selectedId);
                  }}
                  onChange={(newAttrs) => {
                    const hexas = this.state.hexagon.slice();
                    hexas[i] = newAttrs;
                   
                    this.setState({
                      hexagon: hexas,
                    });
                  }}
                  
                  />)}
                
              </Layer>
            </Stage>
          </div>
        </div>{" "}
        <footer className="footer">
          <ul class="list-group list-group-horizontal backward_forward_btn">
            <li class="list-group-item">
              <i class="fas fa-undo"></i>
            </li>
            <li class="list-group-item">
              <i class="far fa-redo-alt"></i>
            </li>
            <li class="list-group-item">
              <i class="far fa-history"></i>
            </li>
            <li class="list-group-item">
              <i class="fas fa-expand-wide"></i>
            </li>
            <li class="list-group-item">
              {" "}
              <i class="far fa-map-marker-alt"></i>
            </li>
          </ul>

          <ul class="list-group list-group-horizontal max_min_size">
            <li class="list-group-item">
              <i class="fas fa-minus" style={{ color: "#137EF9" }}></i>
            </li>
            <li class="list-group-item">
              <label>100%</label>
            </li>
            <li class="list-group-item">
              <i class="far fa-plus" style={{ color: "#137EF9" }}></i>
            </li>
          </ul>
        </footer>
      </header>
    );
  }
}

export default Drawing;
