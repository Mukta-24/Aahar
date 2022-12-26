import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Foodfav from './Foodfav'
import './MainHeading.css'
import NewF from './NewF'
function MainHeading() {
  return (
    <>
    {/* Main Heading */}
    <Container className='main_div'>
      <Row className='main_container'>
        <Col className='main_content'>
          <p className='main_heading'>The Best Way to <span>Connect</span> with your college</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi minus repellat, consequatur beatae aspernatur similique vero eos numquam est, quae distinctio impedit saepe veritatis delectus voluptatem dicta. Blanditiis, voluptas!</p>
          <div>
            <button className="btn">Order Now</button>
          </div>
        </Col>
        <Col className='main_image'>
          <div className="main_bg">
            {/* <img src='https://restaurantapp-c2ed6.web.app/static/media/heroBg.c43c4862422e70d88698.png'/> */}
            <div className="sub-img">
              <div className="upper">
                <div className="box box1">
                  <img className="sub-img1" src="images/alu-parotha-removebg-preview.png" alt="" srcSet="" />
                  <div className="box_info info1">
                    <h5>BREAK FAST</h5>
                  </div>
                </div>
                <div className="box box2">
                  <img className="sub-img2" src="images/shakes-removebg-preview.png" alt="" srcSet="" />
                  <div className="box_info info2">
                    <h5>DRINKS</h5>
                  </div>
                </div>
              </div>
              <div className="lower">
                <div className="box box3">
                  <img className="sub-img3" src="images/combo.png" alt="" srcSet="" />
                  <div className="box_info info3">
                    <h5>COMBOS</h5>
                  </div>
                </div>
                <div className="box box4">
                  <img className="sub-img4" src="images/snakes.png" alt="" srcSet="" />
                  <div className="box_info info4">
                    <h5>SNACKS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    {/* NewFeature */}
    <NewF/>
    {/* FavFood */}
    <Foodfav/>
    </>
    
  )
}

export default MainHeading
